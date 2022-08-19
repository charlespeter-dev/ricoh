
jQuery(document).ready(function ($) {
    var searchbar = function () {
        //add div.suggestion-container before div.header__utility-container
        //because SearchBarEnhancement view not contains div.header__utility-container so use js to add
        $('.header__utility-container').before('<div class="dropdown suggestion-container">'+
                                            '<div class="dropdown__overlay suggestion-overlay"></div>'+
                                        '</div>');

        const apiUrl = "/api/search/autocomplete";
        const groupItemLength = 3;
        const startSuggest = 3;
        var suggestionsContainer = $('.dropdown.suggestion-container');
        var inputField = $('input.input-search-bar');
        var cookieName = "ricoh-recent-searches";
        var datasource = $('#searchbardatasource');
        var noresulttext = $('#searchbar_noresulttext');
        inputField.attr('value', getSearchTermFromQueryString());
        function getSearchTermFromQueryString() {
            var queryStr = window.location.search;
            if (queryStr == '') {
                return '';
            }
            var index = queryStr.indexOf('searchTerm=');
            if (index < 0) {
                return '';
            }
            var index1 = queryStr.indexOf('&', index + 11);
            if (index1 < 0) {
                return decodeURIComponent(queryStr.substr(index + 11).replace(/\+/g,' '));
            }
            return decodeURIComponent(queryStr.substring(index + 11, index1).replace(/\+/g, ' '));
        }
        //get cookie value by cookie name
        function getCookie(cookieName) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + cookieName + "=");
            if (parts.length === 2) return decodeURIComponent(parts.pop().split(";").shift());
        }

        //set value for cookie by cookie name
        function setCookie(cookieName, value) {
            let curCookieValue = getCookie(cookieName);
            var d = new Date();
            d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
            var expires = 'expires=' + d.toUTCString();
            document.cookie = cookieName + '=' + encodeURIComponent(value) + ';' + expires + ';path=/';
        }

        function buildSuggestionHTML(group) {
            return '<div class="dropdown__list-col">'+
                '<span class="suggestion_group_title">'+group.group_displayname+'</span>'+
                '<ul class="dropdown__list">'+buildSuggestionItemHTML(group.group_value)+
                '</ul>'+
            '</div>';
        }

        function buildSuggestionItemHTML(items) {
            var html = "";
            for (var i = 0; i < items.length; i++) {
                html += '<li class="dropdown__item suggestion-item">'+
                          '<a href="'+items[i].item_url+'?search=true" class="suggestion-item dropdown__link">'+
                              '<span>'+items[i].title+'</span>'+
                          '</a>'+
                      '</li>';
            }
            return html;
        }

        function getRecentSearch() {
            let cookieValue = getCookie(cookieName);
            var recentSearchKey = cookieValue ? cookieValue.split("&&") : [];
            var keyLength = recentSearchKey.length;
            var result = [];
            if (keyLength > 0) {
                result = keyLength <= 3 ? recentSearchKey : recentSearchKey.slice(0, 3);
            }
            return result;
        }

        function setRecentSearch() {
			//fix on IE
            searchKey = $.trim(inputField.val());
            if (searchKey.length > 0 && !isExistSearchKey(searchKey)) {
                let cookieValue = getCookie(cookieName);
                setCookie(cookieName, cookieValue ? searchKey + "&&" + cookieValue : searchKey);
            }
        }

        function isExistSearchKey(searchKey) {
            let cookieValues = getRecentSearch();
            if (cookieValues.length > 0) {
				//fix on IE
                return cookieValues.find(function (c){ return c.toUpperCase() === searchKey.toUpperCase();}) !== undefined;
            }
            return false;
        }

        // Instantiate the Bloodhound suggestion engine

        function convertRecentSearchToGroupSuggestion(key) {
            if (key && Array.isArray(key) && key.length > 0) {
                var groupItems = [];
                for (var i = 0; i < key.length; i++) {
                    groupItems.push({
                        title: key[i],
                        item_url: "/search-results?searchTerm=" + key[i]
                    });
                }
                return {
                    group_name: "Recent Searches",
                    group_displayname: inputField.attr('recentsearchtitle'),
                    group_value: groupItems
                };
            }
            return [];
        }

        var searchResults = new Bloodhound({
            datumTokenizer: function (datum) {
                return Bloodhound.tokenizers.whitespace();
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            identify: function (obj) { return obj.group_name; },
            local: convertRecentSearchToGroupSuggestion(getRecentSearch()),
            remote: {
                url: apiUrl + "?searchTerm=%QUERY&groupItemLenght=" + groupItemLength + "&datasource=" + datasource.val(),
                filter: function (data) {
                    return JSON.parse(data);
                },
                wildcard: "%QUERY"
            }
        });
        //// Initialize the Bloodhound suggestion engine
        searchResults.initialize();

        function defaultSuggestion(searchKey, sync, async) {

            //show recent searches
            if (searchKey === "" || searchKey.length < startSuggest) {
                //tip trick to close suggestion dropdown when there is no recent search key
                getRecentSearch().length == 0 && $('.suggestion-container').removeClass("tt-open");
                sync(searchResults.get('Recent Searches'));
            }
            //show suggetion 
            else {
                searchResults.search(searchKey, sync, async);
                $('.suggestion-container').addClass("tt-open");
            }
        }
        function checkOnFocusInputField() {
            recentKey = getRecentSearch();
            if (recentKey.length > 0 || inputField.val().trim().length > 2) {
                return true;
            }
            return false;
        }
        inputField.typeahead({
            //hint: true,
            highlight: true,
            minLength: 0,
            display: "title",
            beforeFocus: checkOnFocusInputField,
            menu: $('.dropdown.suggestion-container'),
            classNames: {
                menu: "suggestion-container",
                dataset: 'dropdown__inner',
            },
        },
            {
                name: 'ricoh',
                display: "group_value",
                source: defaultSuggestion,
                templates: {
                    suggestion: function (data) {
                        $('.overlay.jsOverlay').addClass("tt-open");
                        return buildSuggestionHTML(data);
                    },
                    empty: function () {
                        $('.overlay.jsOverlay').addClass("tt-open");
                        return '<div class="dropdown__list-col">'+
                             '<span>'+noresulttext.val()+'</span>'+
                        '</div>';
                    },
                }
            }
        );

        inputField.on('typeahead:close', function () {
            $('.overlay.jsOverlay').removeClass("tt-open");
        });

        inputField.on('typeahead:beforeselect', function (arg) {
            var selector = arg.handleObj.handler.arguments;
            if (selector.length > 1) {
                if (selector[1].classList && selector[1].length > 0) {
                    return contains("suggestion-item");
                }
            }
            return false;
        });

        inputField.on('click', function (e) {
            //close menu if it is opening;
            if ($('.jsNavBtn.nav__btn--active').length > 0) {
                $('.jsNavBtn.nav__btn--active').click();
            }
        });
        $('.seach-bar-form').on('submit', function (e) {
            setRecentSearch();
        });
    }
    if ($('.jsSearchBar').length) {
        searchbar();
    }
})

