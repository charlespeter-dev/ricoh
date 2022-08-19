jQuery(document).ready(function($) {


	// ---------------------------------------------------------------------
	// | jQuery i18n language translation                                  |
	// ---------------------------------------------------------------------

	// https://github.com/wikimedia/jquery.i18n
	// https://phraseapp.com/blog/posts/jquery-i18n-the-advanced-guide/

	var lang = '';
	lang = $('html').attr('lang') || 'en';
	// strip out hypens
	var newLang = lang.replace(/-/g, '');

	$.i18n().locale = newLang;
	$.i18n().load({
		// english
		// en
		en: {
			'all': 'All',
			'apply filters': 'Apply Filters',
			'email': 'Email',
			'quantity':'Quantity',
			'remove': 'Remove',
			'remove from comparison': 'Remove from comparison',
			'show more': 'Show more',
			'unable to load glossary XML': 'Unable to load glossary XML',
			'search the glossary': 'Search the glossary',
			'item': 'item',
			'items': 'items'
		},
		// thai
		// th-TH
		thTH: {
			'all': 'ทั้งหมด',
			'apply filters': 'ใช้ตัวกรอง',
			'email': 'อีเมล์',
			'quantity':'ปริมาณ',
			'remove': 'เอาออก',
			'remove from comparison': 'นำออกจากการเปรียบเทียบ',
			'show more': 'แสดงมากขึ้น',
			'unable to load glossary XML': 'ไม่สามารถโหลดอภิธานศัพท์ XML',
			'search the glossary': 'ค้นหาคำศัพท์ที่นี่',
			'item': 'item',
			'items': 'items'
		},
		// chinese traditional
		// zh-TW
		zhTW: {
			'all': '所有',
			'apply filters': '應用過濾器',
			'email': '電子郵件',
			'quantity':'數量',
			'remove': '去掉',
			'remove from comparison': '從比較中刪除',
			'show more': '展示更多',
			'unable to load glossary XML': '無法加載詞彙表XML',
			'search the glossary': '搜尋詞彙',
			'item': 'item',
			'items': 'items'
		},
		zhHK: {
			'all': '所有',
			'apply filters': '應用過濾器',
			'email': '電子郵件',
			'quantity':'數量',
			'remove': '去掉',
			'remove from comparison': '從比較中刪除',
			'show more': '顯示更多',
			'unable to load glossary XML': '無法加載詞彙表XML',
			'search the glossary': 'Search the glossary',
			'item': 'item',
			'items': 'items'
		},
		viVN: {
			'all': 'All',
			'apply filters': 'Apply Filters',
			'email': 'Email',
			'quantity':'Số lượng',
			'remove': 'Xóa',
			'remove from comparison': 'Remove from comparison',
			'show more': 'Hiển thị thêm',
			'unable to load glossary XML': 'Unable to load glossary XML',
			'search the glossary': 'Search the glossary',
			'item': 'sản phẩm',
			'items': 'sản phẩm'
		},
	})
	.done(function() {
		// console.log('i18n lang: ' + $.i18n().locale);
		// passes document for any data-i18n attributes and translates
		$('body').i18n();
	})
	.fail(function() {
		console.log('il8n: cannot translate language');
	});


});
