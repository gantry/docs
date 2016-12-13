jQuery(document).on('click', '.tabs-nav a[rel="tab"]', function(event) {
   var target = $(event.currentTarget),
       activeTab = target.closest('ul').find('> li.current').index();

   Cookies.set('gantry_docs_platform', activeTab, { expires: 365 });
});

jQuery(document).ready(function() {
   var activeTab = Cookies.get('gantry_docs_platform') || 0;

   jQuery('.tabs-wrapper').each(function(index, wrapper) {
       wrapper = jQuery(wrapper);
       wrapper.find('> .tabs-nav li').removeClass('current').eq(activeTab).addClass('current').trigger('click');
   });
});
