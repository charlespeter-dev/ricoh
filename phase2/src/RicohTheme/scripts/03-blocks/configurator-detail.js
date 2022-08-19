jQuery(document).ready(function ($) {
	var configuratorDetail = function () {
		//global data
		var configuratordata = null;
		var switchToTest=false;
		var configOptions={};
		var testConfigOptions={};
		var allRules=[];
		initGlobalData();       
		bindUserEvent();
		
		
		//user event
		function bindUserEvent()
		{
			$(".custom-control-input[type=checkbox]").change(function(){
            var input = $(this);
            if(!input.closest(".card.option").hasClass("disabled")){
				var checked=input.prop("checked");
				if(checked)
				{
					var inputValue=input.val();
					engine.excuteValidate(inputValue,1,function(){engine.selectOption(inputValue,1)},function(){$("#" + inputValue).prop("checked",false);});					
				}
				else
				{
					engine.unselectOption(input.val());
				}
            }
			});
			$('.option-extra').change(function(){
					var edpcode=$(this).attr('data-option-id');
					var quantity=Number($(this).val());
					var config=configOptions[edpcode];
					engine.excuteValidate(edpcode,quantity,function(){engine.changeQuantity(edpcode,quantity);},function(){$("#" + edpcode+"-extra").val(config.quantity);});				
				}
			);
			$('#current-config .reset-config').click(function(){
				window.location=window.location.pathname;
			});
			$('.option-detail-description .option-detail-full-specification').click(function(){
				var rakdescription = $(this).closest(".option-detail-description").children(".option-detail-rak-description");
				if (rakdescription.css("display") === 'none') {
					rakdescription.css("display", "block");
					$(this).children('span').text('-');
				}
				else{
					rakdescription.css("display", "none");
					$(this).children('span').text('+');
				}

			});
			$('#current-config .finalise-config').click(function(){
				engine.excuteFinalise();
			});
		}	
		
		function initGlobalData()
		{
			//init configurator data
			configuratordata=$.parseJSON($('#configurator-data').text())
			//init all rules
			for(var i=0;i<configuratordata.rules.length;i++)
			{
				var optionRule=configuratordata.rules[i];
				allRules.push(new OptionRule(optionRule));
			}
			//init config option
			for(var edpcode in configuratordata.options){
				configOptions[edpcode]=new ConfigOption(configuratordata.options[edpcode]);
			}
			//add rule to option
			for(var i=0;i<allRules.length;i++)
			{
				var rule=allRules[i];
				for(var j=0;j<rule.condition.trigger_options.length;j++)
				{
					var trigger_option=rule.condition.trigger_options[j];
					configOptions[trigger_option].select_rules.push(rule);
				}	
				var affect_to_options=[];
				for(var j=0;j<rule.actions.length;j++)
				{
					for(var k=0;k<rule.actions[j].affect_to_options.length;k++)
					{
						var edpcode=rule.actions[j].affect_to_options[k];
						if(affect_to_options.indexOf(edpcode)<0)
						{
							affect_to_options.push(edpcode);
							configOptions[edpcode].affectedByRules.push(rule);
						}
					}					
				}										
			}
			//update affectOptions to config
			for(var index in configuratordata.affect_group)
			{
				var group=configuratordata.affect_group[index];
				for(var i=0;i<group.length;i++)
				{
					var edpcode=group[i];
					configOptions[edpcode].affectOptions=group;
				}				
			}	
			//init test config
			for(var edpcode in configuratordata.options){
				var testConfig=new ConfigOption(configuratordata.options[edpcode]);
				var config=configOptions[edpcode];
				testConfig.select_rules=config.select_rules;
				testConfig.affectedByRules=config.affectedByRules;
				testConfig.affectOptions=config.affectOptions;
				testConfigOptions[edpcode]=testConfig;
			}
		}
		function GetConfigOption(edpcode)
		{
			if(switchToTest)
			{
				return testConfigOptions[edpcode];
			}
			return configOptions[edpcode];
		}
		//Rule
		function OptionRule(option_rule)
		{			    
			this.condition=GetCondition(option_rule.condition);
			this.actions=[];
			for(var i=0;i<option_rule.actions.length;i++)
			{
				var action=option_rule.actions[i];
				this.actions.push(GetAction(action));
			}
			this.isTrigged=function()
			{
				return this.condition.evaluate();
			}
			this.excute=function()
			{
				if(this.condition.evaluate())
				{
					for(var i=0;i<this.actions.length;i++)
					{
						if(!this.actions[i].excute())
						{
							return false;
						}
					}					
				}
				return true;
			}
			this.reExcute=function()
			{
				if(this.condition.evaluate())
				{
					for(var i=0;i<this.actions.length;i++)
					{
						var action=this.actions[i];
						if(action.should_validate_after_excute&&!action.excute())
						{
							return false;
						}
					}					
				}
				return true;
			}
			this.validate=function()
			{
				if(this.condition.evaluate())
				{
					for(var i=0;i<this.actions.length;i++)
					{
						if(!this.actions[i].validateAction())
						{
							return false;
						}
					}	
				}
				return true;
			}
			this.getRequireOneOptions=function()
			{
				var result=[];
				if(!this.condition.evaluate())
				{
					return result;
				}
				for(var i=0;i<this.actions.length;i++)
				{
					var action=this.actions[i];
					if(action.should_validate_after_excute)
					{
						var requireOneOptions=action.getRequireOneOptions();
						if(requireOneOptions.length>0)
						{
							result.push(requireOneOptions);
						}
					}
				}	
				return result;
			}
		}
		//Conditions
		function GetCondition(condition)
		{
			switch(condition.condition_name)
			{
				case 'LogicalCondition':
				   return new LogicalCondition(condition);
			    case 'TrueCondition':
			       return new TrueCondition(condition);
			    case 'QuantityCondition':
				   return new QuantityCondition(condition);
			}
			return null;
		}		
		function QuantityCondition(condition)
		{
			this.condition_name=condition.condition_name;
		    this.trigger_options=condition.trigger_options;
			this.compare_quantity=condition.compare_quantity;
			this.comparer=condition.comparer;
			this.evaluate=function()
			{
				var total=0;
				for(var index in this.trigger_options){
					var config=GetConfigOption(this.trigger_options[index]);
					if(config.state=='checked')
					{
						total+=config.quantity;
					}
				}								
				if(this.comparer=='Equal')
				{
					return total==this.compare_quantity;
				}
				else if(this.comparer=='GreaterThan')
				{
					return total>this.compare_quantity;
				}
				else if(this.comparer=='GreaterThanOrEqual')
				{
					return total>=this.compare_quantity;
				}
				else if(this.comparer=='LessThan')
				{
					return total<this.compare_quantity;
				}
				else if(this.comparer=='LessThanOrEqual')
				{
					return total<=this.compare_quantity;
				}
				return true;
			}
		}
		function TrueCondition(condition)
		{	
		    this.condition_name=condition.condition_name;
		    this.trigger_options=condition.trigger_options;
			this.evaluate=function()
			{
				for(var i=0;i<this.trigger_options.length;i++)
				{
					var config=GetConfigOption(this.trigger_options[i]);
					if(config.state=='checked')
					{
						return true;
					}
				}
				return false;
			}
		}
		function LogicalCondition(condition)
		{	
			this.condition_name=condition.condition_name;
		    this.trigger_options=condition.trigger_options;
			this.logical_operator=condition.logical_operator;
			this.sub_conditions=[];
			for(var i=0;i<condition.sub_conditions.length;i++)
			{
				var sub_condition=condition.sub_conditions[i];
				this.sub_conditions.push(GetCondition(sub_condition));
			}

			this.evaluate=function()
			{
				if(this.logical_operator=='And')
				{
				   for(var i=0;i<this.sub_conditions.length;i++)
				   {
					   var sub_condition=this.sub_conditions[i];
					   if(!sub_condition.evaluate())
					   {
						   return false;
					   }
				   }
				   return true;
				}
				else
				{
				   for(var i=0;i<this.sub_conditions.length;i++)
				   {
					   var sub_condition=this.sub_conditions[i];
					   if(sub_condition.evaluate())
					   {
						   return true;
					   }
				   }
				   return false;
				}
			}
		}
		//Actions
		function GetAction(option_action)
		{
			switch(option_action.action_name)
			{
				case 'RequireOptionAction':
				   return new RequireOptionAction(option_action);
			    case 'ExcludeOptionAction':
			       return new ExcludeOptionAction(option_action);
			    case 'RequireOneAction':
				   return new RequireOneAction(option_action);
				case 'RequireOneExtendAction':
			       return new RequireOneExtendAction(option_action);
				case 'RequireOnlyOneAction':
			       return new RequireOnlyOneAction(option_action);
				case 'RequireQuantityOptionAction':
			       return new RequireQuantityOptionAction(option_action);
				case 'LimitQuantityOptionAction':
			       return new LimitQuantityOptionAction(option_action);
				case 'BridgeOptionAction':
			       return new BridgeOptionAction(option_action);
			}
			return null;
		}
		function RequireOptionAction(option_action)
		{	
			this.action_name=option_action.action_name;
			this.affect_to_options=option_action.affect_to_options;
			this.should_validate_after_excute=option_action.should_validate_after_excute;
		    this.requires=option_action.requires;
			this.excute=function()
			{
				for(var index in this.requires){
					if(!GetConfigOption(this.requires[index]).select(1))
					{
						return false;
					}
				}
				return true;
			}
			this.validateAction=function()
			{
				for(var index in this.requires){
				    var config=GetConfigOption(this.requires[index]);
					if(config.state!='checked')
					{
						return false;
					}
				}
				return true;
			}
		}
		function RequireOneAction(option_action)
		{	
			this.action_name=option_action.action_name;
			this.affect_to_options=option_action.affect_to_options;
			this.should_validate_after_excute=option_action.should_validate_after_excute;
		    this.require_ones=option_action.require_ones;
			this.excute=function()
			{
				for(var index in this.require_ones){
					var config=GetConfigOption(this.require_ones[index]);
					if(config.state!='disabled')
					{
						return true;
					}
				}
				return false;
			}
			this.validateAction=function()
			{
				for(var index in this.require_ones){
				    var config=GetConfigOption(this.require_ones[index]);
					if(config.state=='checked')
					{
						return true;
					}
				}
				return false;
			}
			this.getRequireOneOptions=function()
			{
				for(var index in this.require_ones){
					if(GetConfigOption(this.require_ones[index]).state=='checked')
					{
						return [];
					}					
				}	
                return this.require_ones.slice();
			}
		}
		function RequireOnlyOneAction(option_action)
		{	
			this.action_name=option_action.action_name;
			this.affect_to_options=option_action.affect_to_options;
			this.should_validate_after_excute=option_action.should_validate_after_excute;
		    this.require_only_ones=option_action.require_only_ones;
			this.excute=function()
			{
				var countChecked = 0;
				var count = 0;
				for(var index in this.require_only_ones){
					var config=GetConfigOption(this.require_only_ones[index]);
					if(config.state=='checked')
					{
						countChecked++;
					}
					if(config.state!='disabled')
					{
						count++;
					}
				}
				return count > 0 && countChecked < 2;
			}
			this.validateAction=function()
			{
				var count=0;
				for(var index in this.require_only_ones){
				    var config=GetConfigOption(this.require_only_ones[index]);
					if(config.state=='checked')
					{
						count++;
					}
				}
				return count == 1;
			}
			this.getRequireOneOptions=function()
			{
				for(var index in this.require_only_ones){
					if(GetConfigOption(this.require_only_ones[index]).state=='checked')
					{
						return [];
					}					
				}	
                return this.require_only_ones.slice();
			}
		}
		function RequireOneExtendAction(option_action)
		{	
			this.action_name=option_action.action_name;
			this.affect_to_options=option_action.affect_to_options;
			this.should_validate_after_excute=option_action.should_validate_after_excute;
		    this.must_select_one_options=option_action.must_select_one_options;
			this.or_must_select_options=option_action.or_must_select_options;
			this.excute=function()
			{
				for(var index in this.must_select_one_options){
					var config=GetConfigOption(this.must_select_one_options[index]);
					if(config.state!='disabled')
					{
						return true;
					}
				}
				for(var i=0;i<this.or_must_select_options.length;i++)
				{
					var isDisabled = false;
					var group=this.or_must_select_options[i];
					for(var j=0;j<group.length;j++)
					{
						var config=GetConfigOption(group[j]);
						if(config.state=='disabled')
						{
							isDisabled = true;
							break;
						}
					}
					if (!isDisabled)
					{
						return true;
					}
				}
				return false;
			}
			this.validateAction=function()
			{
				for(var index in this.must_select_one_options){
					var config=GetConfigOption(this.must_select_one_options[index]);
					if(config.state=='checked')
					{
						return true;
					}
				}
				for(var i=0;i<this.or_must_select_options.length;i++)
				{
					var isChecked = true;
					var group=this.or_must_select_options[i];
					for(var j=0;j<group.length;j++)
					{
						var config=GetConfigOption(group[j]);
						if(config.state!='checked')
						{
							isChecked = false;
							break;
						}
					}
					if (isChecked)
					{
						return true;
					}
				}
				return false;
			}
			this.getRequireOneOptions=function()
			{
				var array=[];
				for(var index in this.must_select_one_options){
					if(GetConfigOption(this.must_select_one_options[index]).state=='checked')
					{
						return [];
					}
					array.push(this.must_select_one_options[index]);
				}
				for(var index in this.or_must_select_options){
					var or_must_select_group=this.or_must_select_options[index];
					var check=true;
					var temp=[];
					for(var index1 in or_must_select_group)
					{
						var or_select_option=or_must_select_group[index1];
						if(GetConfigOption(or_select_option).state!='checked')
						{
							temp.push(or_select_option);
							check=false;
						}			
					}
					if(check)
					{
						return [];
					}
					else
					{
						array.push(temp.join(','));
					}
				}				
				return array;
			}
		}
		function RequireQuantityOptionAction(option_action)
		{	
			this.action_name=option_action.action_name;
			this.affect_to_options=option_action.affect_to_options;
			this.should_validate_after_excute=option_action.should_validate_after_excute;
		    this.require=option_action.require;
			this.quantity=option_action.quantity;
			//todo
			this.excute=function()
			{
				var config=GetConfigOption(this.require);
				if(config.state=='unchecked')
				{
					return config.select(this.quantity);
				}
				return config.changeQuantity(this.quantity);
			}
			this.validateAction=function()
			{
				var config=GetConfigOption(this.require);
				return config.state='checked'&&config.quantity==this.quantity;
			}
		}
		function ExcludeOptionAction(option_action)
		{	
			this.action_name=option_action.action_name;
			this.affect_to_options=option_action.affect_to_options;
			this.should_validate_after_excute=option_action.should_validate_after_excute;
		    this.excludes=option_action.excludes;
			this.excute=function()
			{
				for(var index in this.excludes){
					if(!GetConfigOption(this.excludes[index]).disable())
					{
						return false;
					}
				}
				return true;
			}
			this.validateAction=function()
			{
				for(var index in this.excludes){
				    var config=GetConfigOption(this.excludes[index]);
					if(config.state!='disabled')
					{
						return false;
					}
				}
				return true;
			}
		}
		function LimitQuantityOptionAction(option_action)
		{	
			this.action_name=option_action.action_name;
			this.affect_to_options=option_action.affect_to_options;
			this.should_validate_after_excute=option_action.should_validate_after_excute;
		    this.limit_quantity=option_action.limit_quantity;
			this.limit_for_options=option_action.limit_for_options;
			this.excute=function()
			{
				var configs=[];
				for(var index in this.limit_for_options){
					var config=GetConfigOption(this.limit_for_options[index]);
					if(config.state!='disabled')
					{
						configs.push(config);
					}
				}
				for(var index in configs){
					var config=configs[index];
					var quantity=0;
					for(var i=0;i<configs.length;i++)
					{
						if(configs[i]!=config)
						{
							quantity+=configs[i].quantity;
						}
					}
					quantity=this.limit_quantity-quantity;
					if(quantity<1)
					{
						if(!config.disable())
						{
							return false;
						}
					}
					for(var i=0;i<config.available_quantities.length;i++)
					{
						if(config.available_quantities[i]>quantity)
						{
							config.available_quantities.splice(i,1);
							i--;
						}
					}
					if(config.available_quantities.length==0)
					{
						if(!config.disable())
						{
							return false;
						}
					}
				}
				return true;
			}
			this.validateAction=function()
			{
				var total=0;
				for(var index in this.limit_for_options){
					var config=GetConfigOption(this.limit_for_options[index]);
					if(config.state=='checked')
					{
						total+=config.quantity;
					}
				}
				return total<=this.limit_quantity;
			}
		}
		function BridgeOptionAction(option_action)
		{	
			this.action_name=option_action.action_name;
			this.affect_to_options=option_action.affect_to_options;
			this.should_validate_after_excute=option_action.should_validate_after_excute;
		    this.bridge_option=option_action.bridge_option;
			this.base_option=option_action.base_option;
			this.excute=function()
			{
				var bridgeConfig=GetConfigOption(this.bridge_option);
				var baseConfig=GetConfigOption(this.base_option);
				if (baseConfig.quantity > 1)
				{
					if(!bridgeConfig.select(baseConfig.quantity-1))
					{
						return false;
					}						
				}
				return true;
			}
			this.validateAction=function()
			{
				var bridgeConfig=GetConfigOption(this.bridge_option);
				var baseConfig=GetConfigOption(this.base_option);
				if(baseConfig.quantity<=1)
				{
					return bridgeConfig.state!='checked';
				}
				return bridgeConfig.state=='checked'&&bridgeConfig.quantity==baseConfig.quantity-1;
			}
		}
		//engine
		var engine={
			applyPreselect: function()
			{
				var shouldUpdateAvailabelSelectEdpcodes=[];
				for(var edpcode in configuratordata.preselect_configs){
					var config=configOptions[edpcode];
					config.state="checked";
					config.quantity=configuratordata.preselect_configs[edpcode];
					var checkAdd=true;
					for(var i=0;i<shouldUpdateAvailabelSelectEdpcodes.length;i++)
					{
						if(config.affectOptions.indexOf(shouldUpdateAvailabelSelectEdpcodes[i])>-1)
						{
							checkAdd=false;
							break;
						}
					}
					if(checkAdd)
					{
						shouldUpdateAvailabelSelectEdpcodes.push(edpcode);
					}
				}
				for(var edpcode in configuratordata.preselect_configs){
					var config=configOptions[edpcode];
					config.excuteRules();
				}
				if(shouldUpdateAvailabelSelectEdpcodes.length>0)
				{
					for(var i=0;i<shouldUpdateAvailabelSelectEdpcodes.length;i++)
					{
						var config=configOptions[shouldUpdateAvailabelSelectEdpcodes[i]];
						config.updateAvailableSelect();
					    this.updateHideOptions(config.affectOptions);
					}
					for(var index in configuratordata.min_config.requires){
						var edpcode=configuratordata.min_config.requires[index];
						var config=configOptions[edpcode];		
						config.locked=true;
					}
					this.applyAllToUI();
				}
			},
			updateHideOptions:function(edpcodes){
				for(var i=0;i<edpcodes.length;i++)
				{
					var edpcode=edpcodes[i];
					var config=configOptions[edpcode];
					if(config.option_setting.hide_until_required)
					{
						if(config.state!='checked')
						{
							config.hide=true;
							continue;
						}
						var shouldHide=true;
						for(var index in config.affectedByRules)
						{
							var rule=config.affectedByRules[index];
							if(rule.isTrigged())
							{
								shouldHide=false;
								break;
							}
						}
						if(shouldHide)
						{
							config.unselect();
							config.hide=true;
						}
						else
						{
							config.hide=false;
						}
					}
				}				
			},			
			selectOption: function(edpcode,quantity){
				var config=configOptions[edpcode];
				config.manualSelect=true;
				config.select(quantity);
				config.updateAvailableSelect();
				this.updateHideOptions(config.affectOptions);
				this.applyToUI(config.affectOptions);
			},
			unselectOption: function(edpcode){
				var config=configOptions[edpcode];
				config.unselect();
				config.updateAvailableSelect();
				this.updateHideOptions(config.affectOptions);
				this.applyToUI(config.affectOptions);
			},
			changeQuantity: function(edpcode,quantity){
				var config=configOptions[edpcode];
				config.manualSelect=true;
				config.changeQuantity(quantity);
				config.updateAvailableSelect();
				this.updateHideOptions(config.affectOptions);
				this.applyToUI(config.affectOptions);
			},
			selectOptions: function(dictSelectEdpcodes)
			{
				var isValid=true;
				var currentConfig=null;
				for (var edpcode in dictSelectEdpcodes) {
					currentConfig=GetConfigOption(edpcode);
					var quantity=dictSelectEdpcodes[edpcode];
					if(currentConfig.state=='checked')
					{
						if(!currentConfig.changeQuantity(quantity))
						{
							isValid=false;				
							break;
						}
					}
					else
					{
						if(!currentConfig.select(quantity))
						{
							isValid=false;				
							break;
						}
					}
				}
				if(currentConfig!=null)
				{
					currentConfig.updateAvailableSelect();
					this.updateHideOptions(currentConfig.affectOptions);
					this.applyToUI(currentConfig.affectOptions);
				}
				return isValid;
			},
			validateSelectOptions:function(dictSelectEdpcodes)
			{
				switchToTest=true;
				var result={isValid:true,selectOnes:[],autoSelect:[]};
				var first=true;
				var isValid=true;
				var affectOptions=[];
				for (var edpcode in dictSelectEdpcodes) {
					var currentConfig=GetConfigOption(edpcode);
					var quantity=dictSelectEdpcodes[edpcode];
					if(first)
					{					
						currentConfig.syncAffectConfigsToTest();
						affectOptions=currentConfig.affectOptions;
						first=false;
					}
					if(currentConfig.state=='checked')
					{
						if(!currentConfig.changeQuantity(quantity))
						{
							isValid=false;				
							break;
						}
					}
					else
					{
						if(!currentConfig.select(quantity))
						{
							isValid=false;				
							break;
						}
					}
				}
				if(isValid)
				{						
					for(var index in affectOptions)
					{
						var edpcode=affectOptions[index];
						var config=GetConfigOption(edpcode);
						var preConfig=configOptions[edpcode];									
						if(!dictSelectEdpcodes.hasOwnProperty(edpcode)&&config.state=='checked'&&preConfig.state=='unchecked')
						{
							result.autoSelect.push(edpcode);
						}						
						if (config.state=='checked') {
							for(var index in config.select_rules)
							{
								var rule=config.select_rules[index];
								var selectOneOptions=rule.getRequireOneOptions();
								if(selectOneOptions.length>0)
								{
									result.isValid=false;
									for(var i=0;i<selectOneOptions.length;i++)
									{
										result.selectOnes.push(selectOneOptions[i]);
									}									
								}																
							}
						}
					}					
				}
				else
				{
					result.isValid=false;
				}
				switchToTest=false;
				return result;
			},
			excuteValidate: function(edpcode,quantity,okCallback,cancelCallback){
				var config=configOptions[edpcode];				
				var validateobj= config.preValidate(quantity);
				if(validateobj.isValid)
				{
					if(validateobj.autoSelect.length>0)
					{
						var body='<p>The following options are automatically added:</p><ul>';
						for(var i =0;i<validateobj.autoSelect.length;i++)
						{
							var edpcode=validateobj.autoSelect[i];
							body+='<li>'+configuratordata.options[edpcode].displayname+'</li>';
						}
						body+='</ul>';
						modal.openModal('Attention!',body,true,okCallback,cancelCallback);						
					}
					else
					{
						okCallback();
					}
				}
				else
				{
					if(validateobj.selectOnes.length>0)
					{
						var dictEdpCodes={};
						dictEdpCodes[edpcode]=quantity;
						dynamicModal.openModal('Attention!',dictEdpCodes,validateobj.selectOnes,cancelCallback);					
		
					}
				}
			},
			applyAllToUI: function(){
				//apply config option rule
				for(var edpcode in configOptions)
				{
					var config=configOptions[edpcode];
					config.applyToUI();
				}
				//apply config result
				this.applyToConfigResult();
				//apply image
				this.applyImage();
				this.applyDimension();
				
			},
			applyToUI: function(edpcodes){
				//apply config option rule
				for(var index in edpcodes)
				{
					var edpcode=edpcodes[index];
					var config=configOptions[edpcode];
					config.applyToUI();
				}
				//apply config result
				this.applyToConfigResult();
				//apply image
				this.applyImage();
				this.applyDimension();
				
			},
			applyDimension: function()
			{
				var weight=configuratordata.weight;
				var height=configuratordata.height;
				var depth=configuratordata.depth;
				var width=configuratordata.width;
				var selectedoptionStrs=[];	
				for(var edpcode in configOptions)
				{
					var config=configOptions[edpcode];
					if(config.state=='checked')
					{
						weight+=config.option_setting.weight*config.quantity;	
						if(config.option_setting.show_image)
						{
							if(config.quantity<=1)
							{
								selectedoptionStrs.push(edpcode);
							}
							else{
								selectedoptionStrs.push(edpcode + '_' + config.quantity);
							}
						}							
					}
				}								
				$('#current-config .step.model .weight').text(weight.toFixed(2));
				if(selectedoptionStrs.length>0)
				{
					var dimensionUrl='/-/media/all-regional/files/productconfigurator/dimensions.txt?configurator='+configuratordata.configuratorid+'&options=';		
					dimensionUrl+=selectedoptionStrs.join('-')+'&configuratorhash='+configuratordata.configurator_hash;			
					$.get(dimensionUrl, function( data ) {
						var arr=data.split('|');
						$('#current-config .step.model .width').text(arr[0]);
						$('#current-config .step.model .height').text(arr[1]);
						$('#current-config .step.model .depth').text(arr[2]);
					});
				}
				else{
					$('#current-config .step.model .width').text(width);
					$('#current-config .step.model .height').text(height);
					$('#current-config .step.model .depth').text(depth);
				}
				
			},
			applyImage: function()
			{
				var imageurl=configuratordata.mainframe_imageurl+'&configurator='+configuratordata.configuratorid+'&options=';
				var selectedoptionStrs=[];
				for(var edpcode in configOptions)
				{
					var config=configOptions[edpcode];
					if(config.state=='checked'&&config.option_setting.show_image)
					{
						if(config.quantity<=1)
						{
							selectedoptionStrs.push(edpcode);
						}
						else{
							selectedoptionStrs.push(edpcode + '_' + config.quantity);
						}
					}
				}

				imageurl+=selectedoptionStrs.join('-')+'&configuratorhash='+configuratordata.configurator_hash;
				$('#current-config .step.image img').attr('src',imageurl);
				
			},
			applyToConfigResult: function()
			{
				var configResult='';
				for(var edpcode in configOptions)
				{
					var config=configOptions[edpcode];
					if(config.state=='checked')
					{
						if(config.quantity==1)
						{
							configResult+="<li>"+config.option_setting.displayname+"</li>";
						}
						else
						{
							configResult+="<li>"+config.quantity+" x "+config.option_setting.displayname+"</li>";
						}
					}
				}
				$('#current-config .step.options ul').html(configResult);
			},			
			excuteFinalise: function()
			{
				var configs=[];
				for(var edpcode in configOptions)
				{
					var config=configOptions[edpcode];
					if(config.state=='checked')
					{
						configs.push(edpcode);
					}
				}
				if(configuratordata.min_config.must_select_at_least_one_option && configs.length==0)
				{
					modal.openModal('Attention!','Please select at least 1 option!',false,'','');	
					return;
				}
				var body='';
				if(configuratordata.min_config.requires.length>0)
				{
					var mustinstalls=[];
					for(var i=0;i<configuratordata.min_config.requires.length;i++)
					{
						var edpcode=configuratordata.min_config.requires[i];
						if(configs.indexOf(edpcode)<0)
						{
							mustinstalls.push(edpcode);
						}
					}
					if(mustinstalls.length>0)
					{
						body+='<p>You must select following options:</p><ul>';
					    for(var i=0;i<mustinstalls.length;i++)
						{
							var edpcode=mustinstalls[i];
							body+='<li>'+configuratordata.options[edpcode].displayname+'</li>';
						}
						body+='</ul>';
					}
				}
				if(configuratordata.min_config.requireones.length>0)
				{
					for(var i =0;i<configuratordata.min_config.requireones.length;i++)
					{
						var require_one=configuratordata.min_config.requireones[i];
						var success=false;
						for(var j =0;j<require_one.length;j++)
						{
							var edpcode=require_one[j];
							if(configs.indexOf(edpcode)>=0)
							{
								success=true;
								break;
							}
						}				
						if(!success)
						{
							body+='<p>You must select one of the following options:</p><ul>';
							for(var j =0;j<require_one.length;j++)
							{
								body+='<li>'+configuratordata.options[require_one[j]].displayname+'</li>';
							}	
							body+='</ul>';
						}													
					}						
				}
				if(body!='')
				{
					modal.openModal('Attention!',body,false,'','');	
					return;
				}
				window.location=engine.generateFinaliseUrl();
				
			},
			generateFinaliseUrl: function()
			{
				var result='';
				var array=[];
				for(var edpcode in configOptions)
				{
					var config=configOptions[edpcode];
					if(config.state=='checked')
					{
						if(config.quantity>1)
						{
							array.push('id-'+config.option_setting.edpcode+'='+config.quantity);
						}
						else
						{
							array.push('id-'+config.option_setting.edpcode+'=');
						}
					}
				}
				return "/configurator-result/"+configuratordata.edpcode+'?'+array.join('&');
			}
		}
		engine.applyPreselect();								
		//Config Option
		function ConfigOption(option_setting){
			this.option_setting=option_setting;
			this.select_rules=[];
			this.affectedByRules=[];
			this.affectOptions=[];
			this.manualSelect=false;
			this.locked=false;
			this.hide=option_setting.hide_until_required;								
			this.quantity=0;
			this.state='unchecked';
			this.available_quantities=[1];
			if(option_setting.extras.length>1)
			{
				this.available_quantities=option_setting.extras.slice();
			}		
			this.generateHash=function()
			{
				return 'state='+this.state+'|'+'quantity='+this.quantity+'|'+'available_quantities='+this.available_quantities.join(',')+'|'+'locked='+this.locked+'|'+'hide='+this.hide;
			}
			this.hash=this.generateHash();

			this.copyTo=function(copyToConfig)
			{
				copyToConfig.state=this.state;
				copyToConfig.quantity=this.quantity;
				copyToConfig.manualSelect=this.manualSelect;
				copyToConfig.available_quantities=this.available_quantities.slice();
				copyToConfig.hash=this.hash;
				copyToConfig.locked=this.locked;
				copyToConfig.hide=this.hide;
				return copyToConfig;
			}
			this.getConfigChanged=function()
			{
				var result=[];
				var newHash=this.generateHash();
				if(this.hash!=newHash)
				{
					var oldHashArr=this.hash.split('|');
					var newHashArr=newHash.split('|');
					var state_changed=oldHashArr[0]!=newHashArr[0];
					var quantity_changed=oldHashArr[1]!=newHashArr[1];
					var available_quantities_changed=oldHashArr[2]!=newHashArr[2];	
					var locked_changed=oldHashArr[3]!=newHashArr[3];	
					var hide_changed=oldHashArr[4]!=newHashArr[4];					
					if(state_changed)
					{
						var objChanged={propertyChanged:"state",oldValue:oldHashArr[0].replace('state=',''),newValue:this.state};						
						result.push(objChanged);						
					}
					if(quantity_changed)
					{
						var objChanged={propertyChanged:"quantity",oldValue:Number(oldHashArr[1].replace('quantity=','')),newValue:this.quantity};						
						result.push(objChanged);		
					}
					if(available_quantities_changed)
					{
						var objChanged={propertyChanged:"available_quantities",oldValue:oldHashArr[2].replace('available_quantities=','').split(','),newValue:this.available_quantities};						
						result.push(objChanged);		
					}
					if(locked_changed)
					{
						var objChanged={propertyChanged:"locked",oldValue:oldHashArr[3].replace('locked=',''),newValue:this.locked};						
						result.push(objChanged);						
					}
					if(hide_changed)
					{
						var objChanged={propertyChanged:"hide",oldValue:oldHashArr[4].replace('hide=',''),newValue:this.hide};						
						result.push(objChanged);						
					}
				}
				return result;
			}
			this.applyToUI=function()
			{
				var objChangeds=this.getConfigChanged();
				if(objChangeds.length>0)
				{
					this.hash=this.generateHash();
					for(var i=0;i<objChangeds.length;i++)
					{
						var objChanged=objChangeds[i];
						if(objChanged.propertyChanged=="state")
						{
							if(this.state=='checked')
							{
								$("#option-" + this.option_setting.edpcode).removeClass("disabled");
								$("#" + this.option_setting.edpcode).attr("disabled", false);
								$("#" + this.option_setting.edpcode).prop("checked",true);
								if(this.option_setting.extras.length>1){
									$("#" + this.option_setting.edpcode+"-extra").removeClass("hidden");
									$("#" + this.option_setting.edpcode+"-extra").val(1);
								}
							}
							else if(this.state=='disabled')
							{
								$("#" + this.option_setting.edpcode).prop("checked",false);
								$("#option-" + this.option_setting.edpcode).addClass("disabled");
								$("#" + this.option_setting.edpcode).attr("disabled", true);
								if(this.option_setting.extras.length>1){
									$("#" + this.option_setting.edpcode+"-extra").addClass("hidden");
								}
							}
							else
							{
								$("#option-" + this.option_setting.edpcode).removeClass("disabled");
								$("#" + this.option_setting.edpcode).attr("disabled", false);
								$("#" + this.option_setting.edpcode).prop("checked",false);
								if(this.option_setting.extras.length>1){
									$("#" + this.option_setting.edpcode+"-extra").addClass("hidden");
								}
							}
						}
						if(objChanged.propertyChanged=="quantity")
						{
							if(this.option_setting.extras.length>1){
								$("#" + this.option_setting.edpcode+"-extra").val(this.quantity);
							}
						}
						if(objChanged.propertyChanged=="available_quantities")
						{
							$("#" + this.option_setting.edpcode+"-extra option").attr("disabled",false);
							if(this.option_setting.extras.length>1){
								for(var i=0;i<this.option_setting.extras.length;i++)
								{
									if(this.available_quantities.indexOf(this.option_setting.extras[i])<0)
									{
										$("#" + this.option_setting.edpcode+"-extra option[value='"+this.option_setting.extras[i]+"']").attr("disabled",true);
									}
								}
							}
						}
						if(objChanged.propertyChanged=="locked")
						{
							if(this.locked)
							{
								$("#" + this.option_setting.edpcode).attr("disabled", true);
								if(this.option_setting.extras.length>1){
									$("#" + this.option_setting.edpcode+"-extra").addClass("hidden");
								}
							}	
							else{
								$("#" + this.option_setting.edpcode).attr("disabled", false);
								if(this.option_setting.extras.length>1){
									$("#" + this.option_setting.edpcode+"-extra").removeClass("hidden");
								}
							}	
						}
						if(objChanged.propertyChanged=="hide")
						{
							if(this.hide)
							{
								$("#option-" + this.option_setting.edpcode).addClass("hidden");
								$("#" + this.option_setting.edpcode).attr("disabled", false);
								if(this.option_setting.extras.length>1){
									$("#" + this.option_setting.edpcode+"-extra").attr("disabled", false);
								}
							}	
							else{
								$("#option-" + this.option_setting.edpcode).removeClass("hidden");
								$("#" + this.option_setting.edpcode).attr("disabled", true);
								if(this.option_setting.extras.length>1){
									$("#" + this.option_setting.edpcode+"-extra").attr("disabled", true);
								}
							}	
						}
					}
				}
			}
			this.changeQuantity=function(quantity)
			{
				if(this.state!='checked')
				{
					return false;;
				}
				if(this.quantity==quantity)
				{
					return true;
				}				
				var dicQuantity={};
				var recheckOptions=[];
				for(var index in this.affectOptions)
				{
					var edpcode=this.affectOptions[index];
					var optionConfig=GetConfigOption(edpcode);
					if(optionConfig.state=='checked'&&edpcode!=this.option_setting.edpcode)
					{
						recheckOptions.push(optionConfig);
						dicQuantity[edpcode]=optionConfig.quantity;
					}
				}
				this.unselect();
				if(!this.select(quantity))
				{
					return false;
				}
				if(recheckOptions.length>0){
					recheckOptions.sort(function(a,b){return b.manualSelect-a.manualSelect});
				}
				for(var index in recheckOptions)
				{
					var optionConfig=recheckOptions[index];
					if(optionConfig.state=='unchecked')
					{
						optionConfig.manualSelect=true;
						if(!optionConfig.select(dicQuantity[optionConfig.option_setting.edpcode]))
						{
							return false;
						}
					}
				}
				return true;
			}
			this.select=function(quantity)
			{
				if(this.state=='disabled')
				{
					return false;
				}
				if(this.available_quantities.indexOf(quantity)<0)
				{
					return false;
				}
				if(this.state=='checked')
				{
					if(this.select_rules.length==0)
					{
						this.quantity=quantity;				
						this.state='checked';
					}
					return true;
				}
				this.quantity=quantity;
				
				this.state='checked';
	
				for(var index in this.select_rules){
					var rule=this.select_rules[index];
					if(!rule.excute())
					{
						return false;
					}
				}
				return true;
			}
			
			this.excuteRules=function(){
				for(var index in this.select_rules){
					var rule=this.select_rules[index];
					if(!rule.excute())
					{
						return false;
					}
				}
				return true;
			}
			this.disable=function(){
				if(this.state=='checked')
				{
					return false;
				}
				this.quantity=0;
				this.state='disabled';
				return true;
			}
			this.unselect=function()
			{
				if(!this.uncheck())
				{
					return;
				}
				if(this.affectOptions.length<=1)
				{
					return;
				}
				var recheckOptions=[];
				var dicQuantity={};
				for(var index in this.affectOptions)
				{
					var optionConfig=GetConfigOption(this.affectOptions[index]);
					if(optionConfig.state=='checked')
					{
						recheckOptions.push(optionConfig);
						dicQuantity[this.affectOptions[index]]=optionConfig.quantity;
					}
					optionConfig.reset();
				}
				if(recheckOptions.length>0){
					recheckOptions.sort(function(a,b){return b.manualSelect-a.manualSelect});
				}
				for(var index in recheckOptions)
				{
					var optionConfig=recheckOptions[index];
					optionConfig.manualSelect=true;
					optionConfig.select(dicQuantity[optionConfig.option_setting.edpcode]);
				}
			}
			this.uncheck=function()
			{
				if(this.state!='checked')
				{
					return false;
				}
				this.state='unchecked';
				this.quantity=0;
				this.manualSelect=false;
				for(var index in this.affectedByRules)
				{
					var rule=this.affectedByRules[index];
					for(var i=0;i<rule.condition.trigger_options.length;i++)
					{
						if(rule.validate())
						{
							break;
						}
						GetConfigOption(rule.condition.trigger_options[i]).uncheck();
					}											
				}
				
				return true;
			}
			this.reset=function()
			{
				this.state='unchecked';
				this.quantity=0;
				this.available_quantities=[1];
				if(this.option_setting.extras.length>1)
				{
					this.available_quantities=this.option_setting.extras.slice();
				}
				this.manualSelect=false;
			}
			this.syncAffectConfigsToTest=function()
			{
				for(var index in this.affectOptions)
				{
					var edpcode=this.affectOptions[index];
					var config=configOptions[edpcode];
					config.copyTo(testConfigOptions[edpcode]);
				}
			}	
			this.preValidate=function(quantity)
			{
				var result={isValid:true,selectOnes:[],autoSelect:[]};
				switchToTest=true;
				this.syncAffectConfigsToTest();
				var currentConfig=GetConfigOption(this.option_setting.edpcode);
				if(currentConfig.state=='checked')
				{
					currentConfig.changeQuantity(quantity);
				}
				else
				{
					currentConfig.select(quantity);
				}
				for(var index in this.affectOptions)
				{
					var edpcode=this.affectOptions[index];
					var config=GetConfigOption(edpcode);
					var preConfig=configOptions[edpcode];					
					if(this.option_setting.edpcode!=edpcode&&config.state=='checked'&&preConfig.state=='unchecked')
					{
						result.autoSelect.push(edpcode);
					}
					if (config.state=='checked') {
						for(var index1 in config.select_rules)
						{
							var rule=config.select_rules[index1];
							var selectOneOptions=rule.getRequireOneOptions();
							if(selectOneOptions.length>0)
							{
								result.isValid=false;
								for(var i=0;i<selectOneOptions.length;i++)
								{
									result.selectOnes.push(selectOneOptions[i]);
								}									
							}						
						}
					}
				}								
				switchToTest=false;
				return result;

			}
			this.validateWarning=function()
			{
				for(var index in this.affectOptions)
				{
					var edpcode=this.affectOptions[index];
					var config=GetConfigOption(edpcode);					
					if (config.state=='checked') {
						for(var index1 in config.select_rules)
						{
							var rule=config.select_rules[index1];
							if(!rule.reExcute())
							{
								return false;
							}																	
						}
					}
				}
				return true;
			},
			this.updateAvailableSelect=function(){
				switchToTest=true;
				for(var index in this.affectOptions)
				{
					var edpcode=this.affectOptions[index];
					var config=configOptions[edpcode];
					if(config.select_rules.length==0)
					{
						continue;
					}
					if(config.state=='unchecked')
					{
						var available_quantities=config.available_quantities.slice();
						for(var index in available_quantities)
						{
							this.syncAffectConfigsToTest();
							var testConfig=testConfigOptions[edpcode];
							var idx=testConfig.available_quantities.indexOf(available_quantities[index]);
							if(idx>=0&&(!testConfig.select(available_quantities[index])||!this.validateWarning()))
							{
								config.available_quantities.splice(idx,1);
								if(config.available_quantities.length==0)
								{
									config.state='disabled';
								}
							}
						}
					}
					else if(config.state=='checked'&&config.available_quantities.length>1)
					{
						var available_quantities=config.available_quantities.slice();
						for(var index in available_quantities)
						{
							var quantity=available_quantities[index];
							if(quantity==config.quantity)
							{
								continue;
							}
							this.syncAffectConfigsToTest();
							var testConfig=testConfigOptions[edpcode];
							var idx=testConfig.available_quantities.indexOf(quantity);
							if(idx>=0&&(!testConfig.changeQuantity(quantity)||!this.validateWarning()))
							{
								config.available_quantities.splice(idx,1);
								if(config.available_quantities.length==0)
								{
									config.state='disabled';
								}
							}
						}
					}
				}
				switchToTest=false;
			}
		}
		var modal={
			openModal: function(header,body,showCancelBtn,okCallback,cancelCallback)
			{
				var currentModal=this;
				$("#current-config").css('z-index', 'unset');
				$(".sticky-top").css('z-index', 'unset');
				$('#popup-modal').css('display','block');
				$("#popup-modal .modal-header h2").text(header);
				$("#popup-modal .modal-body").html(body);
				if(!showCancelBtn)
				{
					$("#popup-modal .modal-footer .btn-close-modal").css('display','none');
				}
				$("#popup-modal .btn-ok-modal").unbind();
				$("#popup-modal .btn-close-modal").unbind();
				if(okCallback!=null&&okCallback!='')
				{					
					$("#popup-modal .btn-ok-modal").click(okCallback);					
				}				
				if(cancelCallback!=null&&cancelCallback!='')
				{					
					$("#popup-modal .btn-close-modal").click(cancelCallback);					
				}
				$("#popup-modal .btn-ok-modal").click(function(){
						currentModal.closeModal();
					});
				$("#popup-modal .btn-close-modal").click(function(){
					currentModal.closeModal();
				});
			},
			closeModal: function()
			{
				$("#current-config").css('z-index', '1000');
				$(".sticky-top").css('z-index', '1020');
				$('#popup-modal').css('display','none');
				$("#popup-modal .modal-header h2").text('');
				$("#popup-modal .modal-body").empty();
			}						
		};
		var dynamicModal={
			generateBody:function(selectOnes,dictEdpcodes)
			{
				var body='';
				for(var i =0;i<selectOnes.length;i++)
				{
					body+='<p>You must select one of the following options:</p>';
					for(var j =0;j<selectOnes[i].length;j++)
					{
						var edpcodes=selectOnes[i][j];
						var edpcodeList=edpcodes.split(',');
						var optionNames=[];
						var quantities=[];
						
						if(edpcodeList.length==1)
						{
							var edpcode=edpcodeList[0];
							quantities=GetConfigOption(edpcode).available_quantities;
						}
						for(var k=0;k<edpcodeList.length;k++)
						{
							var edpcode=edpcodeList[k];
							optionNames.push(configuratordata.options[edpcode].displayname);
						}
						if(quantities.length==0)
						{
							quantities.push(1);
						}
						var validQuantities=[];
						for(var h=1;h<=quantities.length;h++)
						{
							var dictSelectEdpcodes={};
							for(var p=0;p<edpcodeList.length;p++)
							{
								var edpcode=edpcodeList[p];
								dictSelectEdpcodes[edpcode]=h;
							}
							if(this.checkSelectOptionValid(dictSelectEdpcodes,dictEdpcodes))
							{
								validQuantities.push(h);
							}
						}
						if(validQuantities.length==0)
						{
							continue;
						}
						var labelName=optionNames.join(' and ');
						var group='group-'+i;

						body+='<div class="popup-option-container">';
						body+='<input type="checkbox" id="'+group+'-'+edpcodes+'" name="'+group+'" edpcodes="'+edpcodes+'" quantity="'+validQuantities[0]+'">';
						body+='<label for="'+group+'-'+edpcodes+'" class="label-popup-control"></label>';
						body+='<div class="popup-option-label"><label>'+labelName+'</label></div>';
						body+='</div>';

					}
					body+='<br>';
				}
				return body;
			},
			checkSelectOptionValid:function(dictSelectEdpcodes,dictEdpcodes)
			{															
				this.mergeDictionary(dictSelectEdpcodes,dictEdpcodes);
				var validateObject=engine.validateSelectOptions(dictSelectEdpcodes);
				return validateObject.isValid||validateObject.selectOnes.length>0;				
			},
			getSelectedEdpcodes:function()
			{
				var result={};
				$("#popup-modal .popup-option-container [name^='group-']").each(function(){
					var edpCode = $(this).attr("edpcodes");
					var edpCodes = edpCode.split(",");
					var optionPopup = $(this);
					var value = optionPopup.is(':checked')? parseInt($(this).attr("quantity")) : 0;
					if(value > 0){
						$.each(edpCodes,function(index){
							if(!result.hasOwnProperty(edpCodes[index])){
								result[edpCodes[index]] = value;
							}
						})
					}
				});
				return result;
			},
			mergeDictionary: function(dicOrigin,dic){
				for (var key in dic) {
					if (!dicOrigin.hasOwnProperty(key)) {
						dicOrigin[key] = dic[key];
					}
				}
			},
			validateGroupOptions: function(){
				var result={};
				$("#popup-modal .popup-option-container [name^='group-']").each(function(){
					var edpCode = $(this).attr("edpcodes");
					var group=$(this).attr('name');
					if(!result.hasOwnProperty(group))
					{
						result[group]=false;
					}
					if(!result[group])
					{
						var edpCodes = edpCode.split(",");
						var optionPopup = $(this);
						var value = optionPopup.is(':checked')? parseInt($(this).attr("quantity")) : 0;
						if(value>0)
						{
							result[group]=true;
						}
					}										
				});
				for(var group in result)
				{
					if(!result[group])
					{
						return false;
					}
				}
				return true;
			},
			openModal: function(header,dictEdpcodes,selectOnes,cancelCallback)
			{
				var currentModal=this;
				var body=currentModal.generateBody(selectOnes,dictEdpcodes);
				$("#current-config").css('z-index', 'unset');
				$(".sticky-top").css('z-index', 'unset');
				$('#popup-modal').css('display','block');
				$("#popup-modal .modal-header h2").text(header);
				$("#popup-modal .modal-body").html(body);
				$("#popup-modal .modal-footer .btn-close-modal").css('display','none');				
				$("#popup-modal .btn-ok-modal").unbind();
				$("#popup-modal .btn-close-modal").unbind();
									
				$(".popup-option-container [name^='group-']").change(function(e){
					var groupOptionName =  $(this).attr("name");
					var selectedValue = $(this).prop("tagName") == "SELECT" ? $(this).val() : "";
					$("[name~="+groupOptionName+"]").each(function(index){
						if($(this).prop("tagName") == 'INPUT'){
							$(this).prop("checked",false);
						}else{
							$(this).val("");
						}
					});
					if($(this).prop("tagName") == "INPUT"){
						$(this).prop("checked",true)
					}else{
						$(this).val(selectedValue);
					}
				});				
				if(cancelCallback!=null&&cancelCallback!='')
				{					
					$("#popup-modal .btn-close-modal").click(cancelCallback);					
				}
				$("#popup-modal .btn-ok-modal").click(function(){			
					if(!currentModal.validateGroupOptions()){
						$("#popup-modal .requried-option").text("For each of the following group, please select at least one option");
						return;
					};			
					var dictSelectEdpcodes=currentModal.getSelectedEdpcodes();																
					currentModal.mergeDictionary(dictSelectEdpcodes,dictEdpcodes);
					var validateObject=engine.validateSelectOptions(dictSelectEdpcodes);
					if(validateObject.isValid)
					{	
						currentModal.closeModal();			
						if(validateObject.autoSelect.length>0)
						{
							var body='<p>The following options are automatically added:</p><ul>';
							for(var i =0;i<validateObject.autoSelect.length;i++)
							{
								var edpcode=validateObject.autoSelect[i];
								body+='<li>'+configuratordata.options[edpcode].displayname+'</li>';
							}
							body+='</ul>';
							modal.openModal('Attention!',body,true,function(){engine.selectOptions(dictSelectEdpcodes);},cancelCallback);						
						}				
						else
						{
							engine.selectOptions(dictSelectEdpcodes);
						}							
					}
					else
					{
						if(validateObject.selectOnes.length==0)
						{
							$("#popup-modal .requried-option").text("Your selections are not valid.");
						}
						else
						{
							currentModal.closeModal();	
							currentModal.openModal(header,dictSelectEdpcodes,validateObject.selectOnes,cancelCallback);
						}
					}				
				});
				$("#popup-modal .btn-close-modal").click(function(){
					currentModal.closeModal();
				});
			},
			closeModal: function()
			{
				$("#current-config").css('z-index', '1000');
				$(".sticky-top").css('z-index', '1020');
				$('#popup-modal').css('display','none');
				$("#popup-modal .modal-header h2").text('');
				$("#popup-modal .modal-header .requried-option").text("");
				$("#popup-modal .modal-body").empty();
			}	

		}

	};
	if ($('.jsConfiguratorDetail').length) {
		configuratorDetail();
	}
});






