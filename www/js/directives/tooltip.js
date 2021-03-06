angular.module('starter.directives', [])

.directive('tooltip', function ($document, $compile) {
  return {
     restrict: 'A',
     scope: true,
     link: function (scope, element, attrs) {

       var tip = $compile('<div ng-class="tipClass"><p>{{text}}</p><div class="tooltip-arrow"></div></div>')(scope),
           tipClassName = 'tooltip',
           tipActiveClassName = 'tooltip-show';

       scope.tipClass = [tipClassName];
       scope.text = attrs.tooltip;

       if(attrs.tooltipPosition) {
         scope.tipClass.push('tooltip-' + attrs.tooltipPosition);
       }
       else {
        scope.tipClass.push('tooltip-down');
       }

      element.after(tip);

       element.bind('click', function (e) {
         tip.toggleClass(tipActiveClassName);

         var pos = e.target.getBoundingClientRect(),
             offset = tip.offset(),
             tipHeight = tip.outerHeight(),
             tipWidth = tip.outerWidth(),
             elWidth = pos.width || pos.right - pos.left,
             elHeight = pos.height || pos.bottom - pos.top,
             tipOffset = 10;

         if(tip.hasClass('tooltip-right')) {
           offset.top = pos.top - (tipHeight / 2) + (elHeight / 2);
           offset.left = pos.right + tipOffset;
         }
         else if(tip.hasClass('tooltip-left')) {
           offset.top = pos.top - (tipHeight / 2) + (elHeight / 2);
           offset.left = pos.left - tipWidth - tipOffset;
         }
         else if(tip.hasClass('tooltip-down')) {
           offset.top = pos.top + elHeight + tipOffset;
           offset.left = pos.left - (tipWidth / 2) + (elWidth / 2);
         }
         else if(tip.hasClass('tooltip-left-badged')) {
           offset.top = pos.top;
           offset.left = pos.left - tipWidth - tipOffset;
         }
         else {
           offset.top = pos.top - tipHeight - tipOffset;
           offset.left = pos.left - (tipWidth / 2) + (elWidth / 2);
         }

         tip.offset(offset);
       });

       tip.bind('click', function () {
         tip.toggleClass(tipActiveClassName);
       });
     }
   };
});
