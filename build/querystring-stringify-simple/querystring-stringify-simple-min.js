YUI.add("querystring-stringify-simple",function(d,c){var b=d.namespace("QueryString"),a=encodeURIComponent;b.stringify=function(k,m){var e=[],j=m&&m.arrayKey?true:false,h,g,f;for(h in k){if(k.hasOwnProperty(h)){if(d.Lang.isArray(k[h])){for(g=0,f=k[h].length;g<f;g++){e.push(a(j?h+"[]":h)+"="+a(k[h][g]));}}else{e.push(a(h)+"="+a(k[h]));}}}return e.join("&");};},"@VERSION@",{"requires":["yui-base"]});