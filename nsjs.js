$(document)['ready'](function() {
	if ($('#blogID')['attr']('blogID') != '3242175665436062294') {
		if ($('#blogID')['attr']('blogID') != '6959953148801180862') {
      	if ($('#blogID')['attr']('blogID') != '8305626139830875656') {
	if ($('#blogID')['attr']('blogID') != '2704554257412444737') {

			window['location']['href'] = 'https://www.facebook.com/Taaalam/'
		}
	}
});
(function(_0x111ex1) {
	_0x111ex1['fn']['resizeToParent'] = function(_0x111ex2) {
		function _0x111ex3(_0x111ex1) {
			_0x111ex1['css']({
				width: '',
				height: 'auto',
				"\x6D\x61\x72\x67\x69\x6E\x2D\x6C\x65\x66\x74": '',
				"\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70": ''
			});
			var _0x111ex4 = _0x111ex1['parents'](_0x111ex2['parent'])['width']();
			var _0x111ex3 = _0x111ex1['parents'](_0x111ex2['parent'])['height']();
			var _0x111ex5 = _0x111ex1['width']();
			var _0x111ex6 = _0x111ex1['height']();
			var _0x111ex7 = _0x111ex5 / _0x111ex4;
			if (_0x111ex6 / _0x111ex7 < _0x111ex3) {
				_0x111ex1['css']({
					width: 'auto',
					height: _0x111ex3
				});
				_0x111ex5 = _0x111ex5 / (_0x111ex6 / _0x111ex3);
				_0x111ex6 = _0x111ex3
			} else {
				_0x111ex1['css']({
					height: 'auto',
					width: _0x111ex4
				});
				_0x111ex5 = _0x111ex4;
				_0x111ex6 = _0x111ex6 / _0x111ex7
			};
			var _0x111ex8 = (_0x111ex5 - _0x111ex4) / -2;
			var _0x111ex9 = (_0x111ex6 - _0x111ex3) / -2;
			_0x111ex1['css']({
				"\x6D\x61\x72\x67\x69\x6E\x2D\x6C\x65\x66\x74": _0x111ex8,
				"\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70": _0x111ex9
			})
		}
		var _0x111ex4 = {
			parent: 'div',
			delay: 100
		};
		var _0x111ex2 = _0x111ex1['extend'](_0x111ex4, _0x111ex2);
		var _0x111ex5;
		var _0x111ex6 = this;
		_0x111ex1(window)['on']('resize', function() {
			clearTimeout(_0x111ex5);
			_0x111ex5 = setTimeout(function() {
				_0x111ex6['each'](function() {
					_0x111ex3(_0x111ex1(this))
				})
			}, _0x111ex2['delay'])
		});
		return this['each'](function() {
			var _0x111ex2 = _0x111ex1(this);
			_0x111ex2['attr']('src', _0x111ex2['attr']('src'));
			_0x111ex2['load'](function() {
				_0x111ex3(_0x111ex2)
			});
			if (this['complete']) {
				_0x111ex3(_0x111ex2)
			}
		})
	}
})(jQuery);
$('.imco img')['resizeToParent']();
(function(_0x111ex1, _0x111ex2) {
	if (!_0x111ex1) {
		return _0x111ex2
	};
	var _0x111ex4 = function() {
		this['el'] = _0x111ex2;
		this['items'] = _0x111ex2;
		this['sizes'] = [];
		this['max'] = [0, 0];
		this['current'] = 0;
		this['interval'] = _0x111ex2;
		this['opts'] = {
			speed: 500,
			delay: 3e3,
			complete: _0x111ex2,
			keys: !_0x111ex2,
			dots: _0x111ex2,
			fluid: _0x111ex2
		};
		var _0x111ex4 = this;
		this['init'] = function(_0x111ex2, _0x111ex4) {
			this['el'] = _0x111ex2;
			this['ul'] = _0x111ex2['children']('ul');
			this['max'] = [_0x111ex2['outerWidth'](), _0x111ex2['outerHeight']()];
			this['items'] = this['ul']['children']('li')['each'](this['calculate']);
			this['opts'] = _0x111ex1['extend'](this['opts'], _0x111ex4);
			this['setup']();
			return this
		};
		this['calculate'] = function(_0x111ex2) {
			var _0x111ex3 = _0x111ex1(this),
				_0x111ex5 = _0x111ex3['outerWidth'](),
				_0x111ex6 = _0x111ex3['outerHeight']();
			_0x111ex4['sizes'][_0x111ex2] = [_0x111ex5, _0x111ex6];
			if (_0x111ex5 > _0x111ex4['max'][0]) {
				_0x111ex4['max'][0] = _0x111ex5
			};
			if (_0x111ex6 > _0x111ex4['max'][1]) {
				_0x111ex4['max'][1] = _0x111ex6
			}
		};
		this['setup'] = function() {
			this['el']['css']({
				overflow: 'hidden',
				width: _0x111ex4['max'][0],
				height: this['items']['first']()['outerHeight']()
			});
			this['ul']['css']({
				width: this['items']['length'] * 100 + '%',
				position: 'relative'
			});
			this['items']['css']('width', 100 / this['items']['length'] + '%');
			if (this['opts']['delay'] !== _0x111ex2) {
				this['start']();
				this['el']['hover'](this['stop'], this['start'])
			};
			this['opts']['keys'] && _0x111ex1(document)['keydown'](this['keys']);
			this['opts']['dots'] && this['dots']();
			if (this['opts']['fluid']) {
				var _0x111ex3 = function() {
					_0x111ex4['el']['css']('width', Math['min'](Math['round'](_0x111ex4['el']['outerWidth']() / _0x111ex4['el']['parent']()['outerWidth']() * 100), 100) + '%')
				};
				_0x111ex3();
				_0x111ex1(window)['resize'](_0x111ex3)
			};
			if (this['opts']['arrows']) {
				this['el']['parent']()['append']('<p class="arrows"><span class="prev">\xE2\u2020\x90</span><span class="next">\xE2\u2020\u2019</span></p>')['find']('.arrows span')['click'](function() {
					_0x111ex1['isFunction'](_0x111ex4[this['className']]) && _0x111ex4[this['className']]()
				})
			};
			if (_0x111ex1['event']['swipe']) {
				this['el']['on']('swipeleft', _0x111ex4['prev'])['on']('swiperight', _0x111ex4['next'])
			}
		};
		this['move'] = function(_0x111ex2, _0x111ex3) {
			if (!this['items']['eq'](_0x111ex2)['length']) {
				_0x111ex2 = 0
			};
			if (_0x111ex2 < 0) {
				_0x111ex2 = this['items']['length'] - 1
			};
			var _0x111ex5 = this['items']['eq'](_0x111ex2);
			var _0x111ex6 = {
				height: _0x111ex5['outerHeight']()
			};
			var _0x111ex7 = _0x111ex3 ? 5 : this['opts']['speed'];
			if (!this['ul']['is'](':animated')) {
				_0x111ex4['el']['find']('.dot:eq(' + _0x111ex2 + ')')['addClass']('active')['siblings']()['removeClass']('active');
				this['el']['animate'](_0x111ex6, _0x111ex7) && this['ul']['animate'](_0x111ex1['extend']({
					left: '-' + _0x111ex2 + '00%'
				}, _0x111ex6), _0x111ex7, function(_0x111ex5) {
					_0x111ex4['current'] = _0x111ex2;
					_0x111ex1['isFunction'](_0x111ex4['opts']['complete']) && !_0x111ex3 && _0x111ex4['opts']['complete'](_0x111ex4['el'])
				})
			}
		};
		this['start'] = function() {
			_0x111ex4['interval'] = setInterval(function() {
				_0x111ex4['move'](_0x111ex4['current'] + 1)
			}, _0x111ex4['opts']['delay'])
		};
		this['stop'] = function() {
			_0x111ex4['interval'] = clearInterval(_0x111ex4['interval']);
			return _0x111ex4
		};
		this['keys'] = function(_0x111ex2) {
			var _0x111ex3 = _0x111ex2['which'];
			var _0x111ex5 = {
				37: _0x111ex4['prev'],
				39: _0x111ex4['next'],
				27: _0x111ex4['stop']
			};
			if (_0x111ex1['isFunction'](_0x111ex5[_0x111ex3])) {
				_0x111ex5[_0x111ex3]()
			}
		};
		this['next'] = function() {
			return _0x111ex4['stop']()['move'](_0x111ex4['current'] + 1)
		};
		this['prev'] = function() {
			return _0x111ex4['stop']()['move'](_0x111ex4['current'] - 1)
		};
		this['dots'] = function() {
			var _0x111ex2 = '<ol class="dots">';
			_0x111ex1['each'](this['items'], function(_0x111ex1) {
				_0x111ex2 += '<li class="dot' + (_0x111ex1 < 1 ? ' active' : '') + '">' + (_0x111ex1 + 1) + '</li>'
			});
			_0x111ex2 += '</ol>';
			this['el']['addClass']('has-dots')['append'](_0x111ex2)['find']('.dot')['click'](function() {
				_0x111ex4['move'](_0x111ex1(this)['index']())
			})
		}
	};
	_0x111ex1['fn']['unslider'] = function(_0x111ex2) {
		var _0x111ex3 = this['length'];
		return this['each'](function(_0x111ex5) {
			var _0x111ex6 = _0x111ex1(this);
			var _0x111ex8 = (new _0x111ex4)['init'](_0x111ex6, _0x111ex2);
			_0x111ex6['data']('unslider' + (_0x111ex3 > 1 ? '-' + (_0x111ex5 + 1) : ''), _0x111ex8)
		})
	}
})(window['jQuery'], false);
$(window)['bind']('load', function() {
	$('#slider br')['remove'](), $('#slider .widget img')['removeAttr']('width')['removeAttr']('height'), $('#slider .widget img')['wrap']('<div class="slider-img" />'), $('.slider-img img')['resizeToParent'](), $('#slider .widget')['wrapAll']('<ul />'), $('#slider .widget')['replaceWith'](function() {
		return $('<li class="widget" />')['append']($(this)['contents']())
	}), $('<div class="slideraro"><a class="unslider-arrow prev"></a><a class="unslider-arrow next"></a></div>')['insertBefore']('#slider ul'), $('.slider')['unslider']({
		keys: !0,
		dots: !0,
		fluid: !0
	});
	var _0x111ex1 = $('.slider')['unslider']();
	$('.unslider-arrow')['click'](function() {
		var _0x111ex5 = this['className']['split'](' ')[1];
		_0x111ex1['data']('unslider')[_0x111ex5]()
	}), $('.slider-load')['remove']()
});
$('#slider-container h2')['wrap']('<div class="slide-wrap-ab"></div>');
$('.slide-wrap-ab')['wrap']('<div class="slide-wrap"></div>');
$(document)['ready'](function() {
	$('.slide-wrap-ab')['append']($('#slider .widget-content .caption')['html']())
});
$(document)['ready'](function() {
	$('a[name="templateism-info"]')['before']($('.status-msg-wrap')['html']());
	$('.status-msg-wrap')['html']('')
});
$('.caption')['wrapInner']('<p/>');
var $span = $('.widget-content span.caption');
$span['replaceWith'](function() {
	return $('<div/>', {
		class: 'caption',
		html: this['innerHTML']
	})
});
$('#slider-container .widget')['append']($('#slider .widget-content .caption')['html']());
$(document)['ready'](function() {
	$('.label_thumb')['attr']('src', function(_0x111ex5, _0x111exb) {
		return _0x111exb['replace']('s72-c', 'a400')
	})
});
$(document)['ready'](function() {
	$('.toogle_menu')['click'](function() {
		$('.phone')['addClass']('active_side')
	}), $('.close_menu')['click'](function() {
		$('.phone')['removeClass']('active_side')
	})
});

function parallax() {
	var _0x111ex2 = $(window)['scrollTop'](),
		_0x111ex9 = $(window)['height']();
	$('.parallax .recimg')['each'](function() {
		var _0x111ex5 = $(this)['offset']()['top'],
			_0x111ex1 = _0x111ex5 - _0x111ex2 - _0x111ex9;
		_0x111ex5 > _0x111ex9 && _0x111ex5 ? $(this)['css']('background-position', 'center ' + 0.5 * _0x111ex1 + 'px') : $(this)['css']('background-position', 'center ' + 0.5 * -_0x111ex2 + 'px')
	})
}
$('.recimg')['attr']('style', function(_0x111ex2, _0x111ex9) {
	return _0x111ex9['replace']('s72-c', 's1600')
}), $('.recimg')['attr']('style', function(_0x111ex2, _0x111ex9) {
	return _0x111ex9['replace']('/default.jpg', '/mqdefault.jpg')
}), $(document)['ready'](function() {
	$('.owl-one')['owlCarousel']({
		items: 1,
		rtl: !0,
		loop: !0,
		autoplay: !0,
		animateIn: !0,
		nav: !0,
		navText: ['<i class=\'la la-angle-right\'></i>', '<i class=\'la la-angle-left\'></i>']
	})
}), $(document)['ready'](function() {
	$('.owl-two')['owlCarousel']({
		rtl: !0,
		loop: !0,
		autoplay: !0,
		autoplayTimeout: 2e3,
		nav: !0,
		navText: ['<i class=\'la la-angle-right\'></i>', '<i class=\'la la-angle-left\'></i>'],
		responsive: {
			0: {
				items: 1
			},
			1e3: {
				items: 2
			}
		}
	})
}), $('.sidebar-wrapper h2, .footer-wrapper h2')['wrap']('<div class=\'widget-title\'></div>'), $('.related-posts img')['attr']('src', function(_0x111ex2, _0x111ex9) {
	return _0x111ex9['replace']('s72-c', 's640')
}), $('.related-posts img')['attr']('src', function(_0x111ex2, _0x111ex9) {
	return _0x111ex9['replace']('/default.jpg', '/mqdefault.jpg')
}), $('.PopularPosts ul li')['addClass']('others'), $('.PopularPosts ul li:nth-child(1)')['addClass']('first'), $('.PopularPosts ul li:nth-child(1)')['removeClass']('others'), $('.sidebar-wrapper h2, .footer-wrapper h2')['wrap']('<div class=\'widget-title\'></div>'), $('.image')['wrap']('<div class=\'featimg\'></div>'), $('.featimg')['each'](function() {
	$(this)['parent']()['find']('h3')['before']($(this))
}), jQuery(document)['ready'](function(_0x111ex2) {
	_0x111ex2('.post-summary h3, .post-summary p')['wrapAll']('<div class="featcont" />')
}), $(function() {
	$('.title-cover, .post-tit')['appendTo']('#cover-post')
}), (function(_0x111ex2) {
	_0x111ex2('.PopularPosts img')['attr']('src', function(_0x111ex2, _0x111ex9) {
		return _0x111ex9['replace']('/default.jpg', '/mqdefault.jpg')
	})['attr']('src', function(_0x111ex2, _0x111ex9) {
		return _0x111ex9['replace']('w72-h72', 'w720-h720')
	}), _0x111ex2('.PopularPosts .widget-content ul li')['each'](function() {
		var _0x111ex9 = _0x111ex2(this),
			_0x111ex5 = _0x111ex2(this)['find']('.item-title a'),
			_0x111ex1 = (_0x111ex5['attr']('href'), _0x111ex2(this)['find']('.item-thumbnail a img')['attr']('src')),
			_0x111ex7 = _0x111ex2(this)['find']('.item-thumbnail a'),
			_0x111ex6 = _0x111ex2(this)['find']('.item-thumbnail');
		_0x111ex7['css']('background-image', 'url(' + _0x111ex1 + ')')['empty'](), _0x111ex6['prependTo'](_0x111ex9), _0x111ex2['get'](_0x111ex5['attr']('href'), 'html')
	})
})(jQuery), $(document)['ready'](function() {
	$(window)['scroll'](function() {
		$(this)['scrollTop']() > 100 ? $('.scrollToTop')['fadeIn']() : $('.scrollToTop')['fadeOut']()
	}), $('.scrollToTop')['click'](function() {
		return $('html, body')['animate']({
			scrollTop: 0
		}, 800), !1
	})
})
