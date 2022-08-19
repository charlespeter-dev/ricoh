jQuery(document).ready(function($) {
	var downloadtab = function()
	{
		var delays = {
			timeout: {},
			execute: function(delay, execId, args, callback) {
				if (this.timeout[execId])
					clearTimeout(this.timeout[execId]);
				this.timeout[execId] = setTimeout(function() { callback(args); }, delay);
			}
        };
        var generateSearchResult = function (data) {
            var result ="<dl>"
            $.each(data, function (i, val) {
                result += "<dd><a href=\"{0}\" target=\"_blank\">{1}</a></dd>".replace("{0}", val.Link).replace("{1}", val.Title);
            });
            result+="</dl>"
            return result;
        };
		$('.tablinks').click(function()
		{
			 $('.tabcontent').css('display','none');
			 $('.tablinks').each(function(){$(this).removeClass('active')});
	         $(this).addClass('active');
			 $("#"+$(this).attr('targetto')).css('display','block');
		});
        $('.search-bar-section input').keyup(function () {
            var tabcontent = $(this).closest('.tabcontent')[0];
            var tabid = tabcontent.id;
            var downloadtype = $(tabcontent).attr('download-type');
            var term = $(this).val();
            var notfoundtext = $(tabcontent).find('#notfound-text').html();
            var cellResult = $(this).closest('.tabcontent-inner').find('.search-result-section .cell-result');
            if (term == '') {
                cellResult.empty();
                return;
            };
            var searchurl = "/download/search?type=" + downloadtype + "&term=" + term;
			delays.execute(300,tabid,$(this),function() {
                $.ajax({
                    url: searchurl, success: function (result) {
                        cellResult.empty();
                        if (result.data.length == 0) {
                            cellResult.html(notfoundtext);
                        }
                        else {
                            cellResult.html(generateSearchResult(result.data));
                        }
                        
                    }
                });
			});			
		});
		
	};
	if ($('.jsSearchDownloadTab').length) {
		downloadtab();
		$('.tablinks').first().click();
	}

});