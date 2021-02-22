'use strict'
BrowserDetection();
function BrowserDetection() {/*Check if browser is IE*/if (navigator.userAgent.search("MSIE") >= 0) { $('body, html').addClass('b-ie'); }else if (navigator.userAgent.search("Trident") >= 0) { $('body, html').addClass('b-ie'); }/*Check if browser is Chrome*/else if (navigator.userAgent.search("Chrome") >= 0) {/* insert conditional Chrome code here*/}/*Check if browser is Firefox */else if (navigator.userAgent.search("Firefox") >= 0) {/* insert conditional Firefox Code here*/}/*Check if browser is Safari*/else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {/* insert conditional Safari code here*/}/*Check if browser is Opera*/else if (navigator.userAgent.search("Opera") >= 0) { /* insert conditional Opera code here*/ }return false;}
function scroll_menu(){ setTimeout(function(){ var window_height = $(window).height(), menu_height = $('.two-part-nav').innerHeight();$('.site-header .site-header-main .two-part-nav').css('height','auto'); if(menu_height > window_height){ $('.site-header .site-header-main .two-part-nav').css('height','100vh'); } }, 599); }

function accordianFunction(click_class, click_class_parent , class_parent_sib, active_class ){ $(document).on('click', click_class ,function(e){ e.preventDefault(); if( click_class_parent == click_class ){ var _parent = $(this); }else{ var _parent = $(this).closest(click_class_parent); } var _parent_siblings = $(_parent).closest(class_parent_sib); $(_parent_siblings).siblings().find(click_class_parent).next().slideUp(); $(_parent_siblings).siblings().find(click_class_parent).removeClass(active_class); if( $(_parent).hasClass(active_class) ){ $(_parent).removeClass(active_class); $(_parent).next().slideUp(); }else{ $(_parent).addClass(active_class); $(_parent).next().slideDown(); } scroll_menu(); }); return false; }
accordianFunction('.dropdown-wrapper .dropdown-btn', '.dropdown-wrapper' , '.has-sub-menu', 'nav-active' );
accordianFunction('.product_accordian .accordian_title', '.accordian_title' , '.accordian_content', 'active' );
accordianFunction('.mobile-footer .footer-links-detail .site-footer__item-inner>p.h4', '.mobile-footer .footer-links-detail .site-footer__item-inner>p.h4' , '.site-footer__item', 'active' );
$('.wc_close,.wc_menu_icon').on('click',function(e){ scroll_menu(); });
$('a[href]').each(function(){if( $(this).attr('href').indexOf('http') > -1 ){$(this).attr('target','_blank')}if( $(this).attr('href').indexOf('#') > -1 && $(this).attr('href').length == 1 ){$(this).attr('href','/');}})
$(document).on('click',function(e){if( $(e.target).closest('.btn-nav-close').length || $(e.target).closest('.js-mobile-nav-toggle').length || $(e.target).closest('.two-part-nav').length  || $(e.target).closest('.currency_picker_cls').length || $(e.target).closest('.modal-dialog').length ){return;}$(e.target).closest('.newsletter-box').find('#newslatter_btn').trigger('click');$('body, html').removeClass('header-menu-open');$('body .js-mobile-nav-toggle.mobile-nav--close').addClass('mobile-nav--open');$('body .js-mobile-nav-toggle.mobile-nav--close').removeClass('mobile-nav--close');$('.currency_picker_cls .currency-modal').slideUp();});
$(document).on('click','.btn-trigger .js-mobile-nav-toggle, .site-header .site-header-main .two-part-nav .btn-nav-close',function(e){e.preventDefault();$('body, html').toggleClass('header-menu-open');$(this).toggleClass('mobile-nav--open');$(this).toggleClass('mobile-nav--close');});
$(document).on('click','[data-scrollto]',function(e){ var _id = $(this).attr('data-scrollto'), offset_top = $(window).outerWidth() < 992 ? $(_id).offset().top - 100  : $(_id).offset().top - $('.site-header .site-header-main').outerHeight(); offset_top = $('.scroll-navigation-to').length > 0 ?  offset_top - $('.scroll-navigation-to').outerHeight() - 10 : offset_top; if($(_id).length > 0 ){ e.preventDefault(); $('html,body').animate({ scrollTop: ( offset_top ) }, 1500);} });
$(document).on('click','.banner-scroll-arrow',function(){ var _id = $(this), offset_top = $(window).outerWidth() < 992 ? $(_id).offset().top - 100  : $(_id).offset().top - $('.site-header .site-header-main').outerHeight(); if( $('body').hasClass('template-index')){ offset_top = $(this).closest('.index--section').next().offset().top; }else{ offset_top = offset_top + _id.outerHeight() + 15; } $('html,body').animate({ scrollTop: ( offset_top ) }, 1200); })
$(document).ready(function(){ /* index js */ headerFixed($(this).scrollTop()); bannerHeight(); homepageSlider(); /* index js end */
  $(document).on('click','.see-more-btn',function(){ var _this = $(this),  _parent = _this.closest('.testimonial'), _first_child_height = $(_parent).find('.testi_li:first-child').outerHeight(), _all_child_height = 0, animate_height = 0, activeClass="testimonial-open", test_parent_class = '.page-block-testimonial'; if ( _this.hasClass('see-more-btn-two') ){ _parent = _this.closest('.page-block-testimonial-two').find('.testimonial-two'); _first_child_height = $(_parent).find('.testi_li:first-child').outerHeight(); test_parent_class = '.page-block-testimonial-two'; activeClass="testimonial-two-open"; var t_padding = _this.closest(test_parent_class).outerHeight() - _this.closest(test_parent_class).height(); } $(_parent).find('.testi_li').each(function(){ _all_child_height += $(this).outerHeight(); }); if(!_this.hasClass('active')){ _this.closest(test_parent_class).prev().addClass(activeClass); animate_height = _all_child_height; _this.text('See less'); }else{ _this.closest(test_parent_class).prev().removeClass(activeClass); animate_height = _first_child_height; _this.text('See more'); } $(this).toggleClass('active'); $(_parent).toggleClass('animated'); $(_parent).animate({ height: animate_height+'px' }, 800, function() { }); })  
});
function homepageSlider(){ var prevArrow = '<button class="custom-arrow slick-prev slick-arrow" aria-label="Previous" type="button" aria-disabled="false"><img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="//cdn.shopify.com/s/files/1/0318/4839/8907/t/14/assets/BlackArrowLeft_300x.png?v=4474757943884721440" alt="Previous Arrow" width="auto" height="auto" /></button>', nextArrow = '<button class="custom-arrow slick-next slick-arrow" aria-label="Next" type="button" aria-disabled="false"><img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="//cdn.shopify.com/s/files/1/0318/4839/8907/t/14/assets/BlackArrowRight_300x.png?v=17239851723819549468" alt="Next Arrow" width="auto" height="auto" /></button>';  
  $('.hfp-grid-slider').slick({ dots: false, infinite: false, speed: 650, slidesToShow: 4, slidesToScroll: 1, prevArrow : prevArrow, nextArrow : nextArrow, responsive: [ { breakpoint: 1201, settings: { slidesToShow: 3 } }, { breakpoint: 768, settings: { slidesToShow: 2 } }, { breakpoint: 375, settings: { slidesToShow: 1 } } ] }); }

$(function () { /*$("div").slice(0, 4).show();*/ $(".see-more-btn-two").on('click', function (e) { e.preventDefault();     var slice_value = $(window).outerWidth() < 992 ? 2 : 3; $(this).closest('.page-block-testimonial-two').find("li:hidden").slice(0, slice_value).slideDown(); if ($(this).closest('.page-block-testimonial-two').find("li:hidden").length == 0) { $(this).fadeOut('slow'); $(this).hide(); } }); });

var over_content = false, fixed_part = $('.product-single .product-inner');
if(fixed_part.length > 0 ){ var _right_po = $(window).outerWidth() - ( $('.product-single .product-inner').outerWidth() +  $('.product-single .product-inner').offset().left ), offset_top_h = fixed_part.offset().top + fixed_part.outerHeight(); }
$(window).scroll(function(e){ headerFixed($(this).scrollTop()); })
$(window).on('resize',function(){ bannerHeight(); });

function headerFixed(scrollTop){
  if( scrollTop > ( $('.site-header .site-header-upper').offset().top + $('.site-header .site-header-upper').outerHeight() ) ){ if($('.site-header.header_static').length > 0 ){ if($('.site-header.header_static > .page-width .dummy_header_div').length < 1){ $('.site-header.header_static > .page-width .dummy_header_div').remove(); $('.site-header.header_static > .page-width').append('<div class="dummy_header_div" style="padding-top:'+ $('.site-header .site-header-main').outerHeight() +'px;"></div>') } } $('.site-header .site-header-main').addClass('header-fixed'); }else{ $('.site-header .site-header-main').removeClass('header-fixed'); $('.site-header.header_static > .page-width .dummy_header_div').remove(); }  
  if($('.scroll-navigation-to').length > 0){var scrollTop=scrollTop + $('.site-header-main.header-fixed').outerHeight(); $('.scroll-navigation-to').each(function(e){if ( scrollTop > $(this).offset().top && $(this).hasClass('scrolling') !=true ){var str=$(this).attr('class'); str=str.replace('scroll-navigation-to',''); $(this).addClass('scrolling'); $(this).parent().append('<div class="dummy-div '+ str+'" style="height:'+ $(this).outerHeight()+'px;"></div>'); $(this).css({'position':'fixed','margin-top': $('.site-header-main.header-fixed').outerHeight()+'px'});}if( $(this).hasClass('scrolling')==true ){if( scrollTop < (($(this).parent().find('.dummy-div').offset().top) + $(this).parent().find('.dummy-div').outerHeight()) ){$(this).removeClass('scrolling'); $(this).parent().find('.dummy-div').remove(); $(this).removeAttr('style');}}})}   
  return; }
function bannerHeight(){
  $("[data-img-ratio]").each(function(){    
    var _child_height = $(this).parent().find('.banner-caption-category').length > 0 ? $(this).parent().find('.banner-caption-category').outerHeight() + 100 : $(this).parent().find('.banner-caption').outerHeight() + 200, ratio_height = $(this).width() / $(this).data("img-ratio"), padding_bottom =  ratio_height < _child_height ? (_child_height + ratio_height) - 100 : ratio_height, full_height = $(this).data("height-full"), attr = $(this).attr('data-height-full'); if (typeof attr !==typeof undefined && attr !==false){if( full_height !=true ){if( $(this).parent().parent().find('.verticle_till').length > 0 ){padding_bottom=$(window).outerHeight();}else{padding_bottom=$(window).outerHeight(); padding_bottom=$(window).outerHeight() - ((padding_bottom*22)/100);}}} 
    $(this).css('padding-bottom',(padding_bottom)+'px'); }); $('.hero-collection-newsletter[data-aspect-ratio]').each(function(){ if( $(this).is('[data-aspect-ratio]') ){ var _width = $(this).width(), _height =  _width / $(this).data('aspect-ratio'); $(this).height(_height); } }) 
  
  if($('.verticle-true').length > 0){
    setTimeout(function(){
      $('.verticle-true').each(function(){
        var _this_top = $(this).offset().top;
        var _this_right = $(this).offset().left;
        if( $(this).hasClass('text-position-top-right') ){          
          var _right = Math.abs(( $(this).parent().offset().left ) + $(this).parent().width() + Number( ($(this).parent().css('padding-left')).match(/\d+/g)[0] ) );
          var out_right = Math.abs(( $(this).parent().offset().left ) + $(this).parent().outerWidth() );
          var _top = Math.abs(( $(this).parent().offset().top ) + Number( ($(this).parent().css('padding-top')).match(/\d+/g)[0] ) );          
          if( Math.floor(_this_top) < Math.floor(_top) ){ _this_top = Math.abs( _top - _this_top ); var padding_top = ($(this).parent().height()) - ($(this).parent().outerHeight()); padding_top = Math.abs((padding_top / 2)); $(this).css("top",( _this_top ) +"px"); }
          if(  _this_right < out_right && _this_right > _right  ){}else{ var padding_left = ( $(this).parent().width() ) - ($(this).parent().outerWidth() ); padding_left = Math.abs((padding_left / 2)); _this_right = Math.abs((out_right  - _this_right ) + padding_left ); $(this).css("right", "-"+ ( _this_right ) +"px"); }          
        } }) },500) }  
  
  if( $('.home-banner-two .banner-header').length > 0 ){
    var header_height = $(window).outerWidth() > 991 ? $('.site-header .site-header-upper').outerHeight() + $('.site-header .site-header-main').outerHeight() : $('.site-header .site-header-upper').outerHeight();
    var innerCaption_height = $(window).outerWidth() > 767 ? ($(window).outerHeight() - header_height)/2: 'no_need' ;
    $('.home-banner-two .banner-header').each(function(){ $(this).css('height',(header_height )+'px'); });
    if( innerCaption_height != 'no_need' ){ if( $('.home-banner-two.home-banner-three').length > 0 ){ $('.home-banner-two.home-banner-three').each(function(){  var inner_caption = $(this).find('.inner_caption.text-border').outerHeight(), innerCaption_height_ = $(window).outerWidth() > 767 ? ($(window).outerHeight() - ( header_height )) : 'no_need' ; $(this).find('.inner_caption.text-border').css('height',(((innerCaption_height_)/2) ) +'px'); $(this).find('.inner_caption.text').css('height',( ((innerCaption_height_)/2) ) +'px'); });  }else{ $('.home-banner-two .banner-caption .inner_caption').css('min-height','1px'); $('.home-banner-two .banner-caption .inner_caption').css('height',innerCaption_height+'px'); } }else{ $('.home-banner-two .banner-caption .inner_caption').css('min-height',' '); $('.home-banner-two .banner-caption .inner_caption').css('height',' '); }
  }
  
  if( $('.people-grid').length > 0 && $(window).outerWidth() < 992 ){
    $('.people-grid').each(function(){ if( $(this).find('.people-item').length > 6){ $(this).find('.people-item').each(function(index){ if( index > 5  ){ $(this).addClass('hide_block'); } }) } })
  }else{ 
    $('.people-grid').each(function(){ $(this).find('.people-item').each(function(index){ if( index >= 5 && index <= 8  ){ $(this).removeClass('hide_block'); } }) })
  }
  
  if($('.verticle_till').length > 0){
    $('.verticle_till:not(.verticle_till_no)').each(function(){
      $(this).css('margin-top', '0px');
      var banner_off_top = $(window).outerHeight(), content_off_top = 0;
      if( $(this).parent().find('.home-banner').length > 0 ){ banner_off_top += $(this).parent().find('.home-banner').offset().top; } if($(this).find('.section-header').length > 0){ content_off_top = $(this).find('.section-header').offset().top + $(this).find('.section-header').height(); } if($(this).find('.section-header').length < 1 ){ content_off_top = $(this).find('.detail').offset().top + $(this).find('.detail').height(); }
      if( content_off_top > banner_off_top ){ $(this).css('margin-top', ( ( banner_off_top - content_off_top) - 20 )+'px') }
    })
    $('.banner-scroll-arrow').each(function(){ var scroll_position = 0;
      if ($(this).offset().top >= $(window).height() ){ var scroll_position = ( $(this).offset().top +  $(this).outerWidth() + 15 ); scroll_position = scroll_position - $(window).height(); }      
      if(scroll_position > 0){ $(this).css({'bottom':scroll_position+'px'}); } return false; }) } return false; }

$(document).ready(function() {
  $('.inner_caption').each(function(e){ var s = $(this), pos = s.position();  $(window).scroll(function() { var windowpos = $(window).scrollTop() + 100; if (windowpos >= pos.top & windowpos <=1500) { s.addClass("stick"); } else { s.removeClass("stick"); } }); });  
  $('.wc_video_box .play-btn-video, .wc_video_box .play-btn').on('click',function(e){ e.preventDefault(); $(this).parents('.wc_video_box').addClass('video-is-playing'); });
  $( ".home_header .wc_menu_item" ).mouseover(function(){ $('.wc_img_brn_two').addClass('hover_bnr_img'); });
  $( ".home_header .wc_menu_item" ).mouseout(function(){ $('.wc_img_brn_two').removeClass('hover_bnr_img'); });  
  /* hover navigation */
  $( ".wc_menu_item" ).mouseover(function(){ if($(window).outerWidth() >991 ){ $('.site-header').addClass('site-header_hover'); } }); 
  $( ".wc_menu_item" ).mouseout(function(){if($(window).outerWidth() >991 ){ $('.site-header').removeClass('site-header_hover');} });
  setTimeout(function(){
    var _link = document.getElementsByTagName('link');
    for(var i = 0 ; i < _link.length ; i++ ){
      if( _link[i].getAttribute('rel') == "preload" && _link[i].getAttribute('as') == "style"){
        _link[i].rel='stylesheet';
      }
    }
  },100)
});

if($('[data-vedio-type="vimeo"]').length > 0 || $('[data-vemio-background]').length > 0 ){ callScripAPI(); }
function callScripAPI(){ if( $('[src="https://player.vimeo.com/api/player.js"]').length > 0 ) return; 
                        var tag = document.createElement('script'); tag.src = "https://player.vimeo.com/api/player.js"; var firstScriptTag = document.getElementsByTagName('script')[0]; firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); }

$(document).on('click','[data-vedio-type="vimeo"]',function(){ var iframe = $(this).closest('.wc_video_box').find('iframe'), player = new Vimeo.Player(iframe); $(this).closest('.wc_video_box').find('.custom_player_div').addClass('vemioplayer'); $(this).attr('data-vedio-type','vimeoplayer'); vimeoPlayer(player); });
$(document).on('click','.lang_swicther .lang',function(){ $('#lang-list').find('.disclosure-list__option[data-value="'+$(this).attr('data-lang')+'"]').trigger('click'); })

$(window).on('load',function(){
  setTimeout(function(){bannerHeight(); },100);  
  $('[data-vemio-background]').each(function(){ var iframe = $(this).parent().find('[data-vemio-background]');                                                
                                                 if ($(this).parent().hasClass('has_mobile_image') && $(window).width() < 768 ) return; setTimeout(function(){
                                                   var options = { id: $(iframe).attr('id'), width : $(window).width(), height : $(window).height(), controls : false, loop: true, autoplay : true, autopause: false, muted: true, background : true };
                                                   var player = new Vimeo.Player($(iframe).attr('id'), options);                                                   
                                                   $(player.element).attr('class','video video--background video--background');
                                                   vimeoPlayerBg(player); 
                                                 }, 1000); 
                                              });
  if($.cookie('ly-lang-selected') != ''){ $('.lang_swicther .lang').removeClass('active'); $('.lang_swicther .lang').each(function(){ if( $.cookie('ly-lang-selected') == $(this).data('lang')){ $(this).addClass('active'); return false; } }); }
  if($('.ly-languages-switcher').length){ $('.lang_swicther .lang').removeClass('active'); var lang = $('.ly-languages-switcher .current_lang').data('ly-code'); $('.lang_swicther .lang[data-lang="'+lang+'"]').addClass('active'); }
});

function vimeoPlayerBg(player){
  var playing = player['play'](); 
  setTimeout(function(){ $(player.element).parents('.video-section-wrapper').addClass('video-is-loaded'); 
                        $('html').addClass('autoplay'); frameSize(player); },100);
  player.setVolume(0);
  player.on('bufferstart', function(data) {    
    $(player.element).parents('.video-section-wrapper').addClass('buffering');
  });
  player.on('bufferend', function(data) {
    $(player.element).parents('.video-section-wrapper').removeClass('buffering');
    $(player.element).closest('.video-section-wrapper').addClass('video-is-loaded video-is-loaded_');
  });
  player.on('playing', function(data){ $(player.element).closest('.video-section-wrapper').addClass('video-is-loaded video-is-loaded_'); return;});
  $(window).resize(function() { setTimeout(function(){ $(player.element).parents('.video-section-wrapper').addClass('video-is-loaded'); frameSize(player); $('html').removeClass('no-autoplay'); $('html').addClass('autoplay'); },500) });
}
function frameSize(player){  
  if( $(window).width() <= $(window).height() ){ $(player.element).css('width', ($(window).height() * 1.5) +'px'); $(player.element).css('height', $(window).height()+'px'); }else{ $(player.element).css('width', $(window).width()+'px'); $(player.element).css('height', $(window).height()+'px'); }
}

function vimeoPlayer(player){
 var vdo_play = "", playing = player['play'](), time_string = '';
  player.on('play', function(data) {    
    setTimeout(function(){ $(player.element).parents('.wc_video_box').addClass('video-is-playing'); $(player.element).parent().find('.custom_player_div .paush-play').addClass('playing'); },100)
    getCurrentTime();    
    if (vdo_play){ clearInterval(vdo_play); $(player.element).parents('.video-is-playing').removeClass('video-is-playing'); }
    var currentPos, percentage, vdoEndTym = "";
    vdo_play = setInterval(function (){
      player.on('timeupdate', function (getAll){ currentPos = getAll.seconds; /*get currentime*/ vdoEndTym = getAll.duration; /*get video duration*/
        percentage = (getAll.percent * 100)+"%"; var timimg = currentPos.toFixed(0);
        if( timimg < 60 ){ time_string = timimg <= 9 ? '00:0'+timimg :'00:'+timimg ; }else if(timimg >= 60 && timimg <= 3599){
          /*var minutes = Math.floor(timestamp / 60) - (hours * 60);*/
          var minutes = Math.floor(timimg / 60), seconds = Math.floor(timimg % 60); minutes = minutes < 10 ? '0'+ minutes : minutes; seconds = seconds < 10 ? '0'+ seconds : seconds; time_string = minutes +':'+ seconds;
        }else{}
        $(player.element).parent().find('.custom_player_div .remaining-time').text(time_string); $(player.element).parent().find('.custom_player_div .progress_bar .total_pro').css('width',percentage);          
      });
      player.on('ended', function (){ clearInterval(vdo_play); }); }, 1000);    
    $('.custom_player_div .progress_bar').click(function(e){
      var _wdith_left = $(e.target).offset().left, _width = $(e.target).width(), _cur_p = e.pageX - _wdith_left;
      _width = ((_cur_p/_width))*100; player['pause']();
      var url = $(player.element).attr('src'), data = {method: "seekTo", value: _width};
      player.getDuration().then(function(duration) { /* duration = the duration of the video in seconds */ seekTo(((duration*_width)/100)); return false; }).catch(function(error){ });      
      function seekTo(duration){ player.setCurrentTime(duration).then(function(seconds) { player['play'](); return false; }).catch(function(error) { switch (error.name) { case 'RangeError': break; default: break; } }); return false; }
    });
    if (playing !== undefined ){ var pausedSelector = $(player.element).parents('.video-is-playing').find('.paush-video'); if( pausedSelector.length == 1 ){ callPause(pausedSelector); return false; } }
  });  
  function callPause(pausedSelector){ $(pausedSelector).click(function(){ player[$(this).attr('alt')](); $(player.element).parents('.video-is-playing').removeClass('video-is-playing'); $(player.element).parent().find('.custom_player_div .paush-play').removeClass('playing'); }); return false; }
  player.getDuration().then(function(duration) { var duration_string = '';    
    if(duration < 60){ duration_string = 'END : 00:'+Math.floor(duration); }else if(duration >= 60 && duration <= 3599){
      /*var minutes = Math.floor(timestamp / 60) - (hours * 60);*/
      var minutes = Math.floor(duration / 60),seconds = Math.floor(duration % 60); minutes = minutes <= 9 ? '0'+ minutes : minutes; seconds = seconds <= 9 ? '0'+ seconds : seconds; duration_string = 'END : '+ minutes +':'+ seconds;
    }else{} $(player.element).parent().find('.custom_player_div .tt-time').text(duration_string);    
  }).catch(function(error) { });
  function getCurrentTime(){ player.getCurrentTime().then(function(currentTime){ }); return false; }  
  $('[data-vedio-type="vimeoplayer"]').click(function(){ playing = player['play'](); $(player.element).parents('.wc_video_box').addClass('video-is-playing'); });
  $(document).on('click','.video-is-playing .video-control__close-wrapper',function(){ player['pause'](); $(player.element).parents('.video-is-playing').removeClass('video-is-playing'); $(player.element).parent().find('.custom_player_div .paush-play').removeClass('playing'); });
}
$('.custom_mailchimp_form').each(function(e){ var _this = $mcj(this); $mcj(this).validate({ errorClass: "mce_inline_error", errorElement: "div", onkeyup: false,
      onfocusout: function(element) {  if (!mc.isTooEarly(element)) { $mcj(element).valid(); } },
      onblur: function(element) {  if (!mc.isTooEarly(element)) { $mcj(element).valid(); } },      
      groups: function (){  var groups = {}; _this.find(".mc-field-group").each(function(index) { var inputs = $(this).find("input:text:not(:hidden), input:checkbox:not(:hidden)"); if (inputs.length > 1) { var mergeName = inputs.first().attr("name"); var fieldNames = $.map(inputs, function(f) { return f.name; }); groups[mergeName.substring(0, mergeName.indexOf("["))] = fieldNames.join(" "); } });
			return groups; }, errorPlacement: function(error, element) { element.closest('#mc_embed_signup_scroll').append(error); },    
      // Submit the form via ajax (see: jQuery Form plugin)
      submitHandler: function(form) {
        var url = _this.attr("action"); url = url.replace("/post?u=", "/post-json?u="); url += "&c=?";        
        var ajaxOptions = { url: url, type: 'GET', data: _this.serialize(), dataType: 'json', contentType: "application/json; charset=utf-8", success: user.success_cb, error: function (err) { console.log(err); } };
        $mcj(form).ajaxSubmit(ajaxOptions); } });
  var user = { success_cb: function(resp){
		    _this.find('#mce-success-response').hide(); _this.find('#mce-error-response').hide();
		    if (resp.result == "success"){ _this.find('#mce-'+resp.result+'-response').show(); _this.find('#mce-'+resp.result+'-response').html(resp.msg); _this.each(function(){ this.reset(); });
		    // If the form has errors, display them, inline if possible, or appended to #mce-error-response
		    } else { if (resp.msg === "captcha") { var url = _this.attr("action"); var parameters = $.param(resp.params); url = url.split("?")[0]; url += "?"; url += parameters; window.open(url); };
				// Example errors - Note: You only get one back at a time even if you submit several that are bad.  // Error structure - number indicates the index of the merge field that was invalid, then details // Object {result: "error", msg: "6 - Please enter the date"}  // Object {result: "error", msg: "4 - Please enter a value"}  // Object {result: "error", msg: "9 - Please enter a complete address"} 
				// Try to parse the error into a field index and a message. On failure, just put the dump thing into in the msg variable.
		        var index = -1, msg; try { var parts = resp.msg.split(' - ',2); if (parts[1]==undefined){ msg = resp.msg; } else { i = parseInt(parts[0]); if (i.toString() == parts[0]){ index = parts[0]; msg = parts[1]; } else { index = -1; msg = resp.msg; } } } catch(e){ index = -1; msg = resp.msg; }
		        try { // If index is -1 if means we don't have data on specifically which field was invalid. // Just lump the error message into the generic response div.
		            if (index == -1){ _this.find('#mce-'+resp.result+'-response').show(); _this.find('#mce-'+resp.result+'-response').html(msg);
		            } else { var fieldName = $("input[name*='"+fnames[index]+"']").attr('name'); // Make sure this exists (they haven't deleted the fnames array lookup)
		                var data = {}; data[fieldName] = msg; mc.mce_validator.showErrors(data); } } catch(e){ _this.find('#mce-'+resp.result+'-response').show(); _this.find('#mce-'+resp.result+'-response').html(msg); }
		    } } } });