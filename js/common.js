var goods = {
    12321 : {
        "name": "Перфоратор",
        "producer" : "Bosch",
        "name2" : "BFG 3000",
        "cost_1" : 3550,
        "cost_2" : 3394,
        "batteries" : 1,
        "image" : "bosch3000.jpg",
        "new" : 0
    },
    12322 : {
        "name": "Перфоратор",
        "producer" : "Bosch",
        "name2" : "BFG 6000",
        "cost_1" : 3500,
        "cost_2" : 2500,
        "batteries" : 1,
        "image" : "bosch6000.jpg" ,
        "new" : 1
    },
    12323 : {
        "name": "Перфоратор",
        "producer" : "Bosch",
        "name2" : "BFG 2900",
        "cost_1" : 3700,
        "cost_2" : 3491,
        "batteries" : 1,
        "image" : "bosch2900.jpg",
        "new" : 0
    },
    12324 : {
        "name": "Перфоратор",
        "producer" : "TexAc",
        "name2" : "TA-01-352",
        "cost_1" : 1399,
        "cost_2" : 1279,
        "batteries" : 1,
        "image" : "tex352.jpg",
        "new" : 0
    },
    12325 : {
        "name": "Перфоратор",
        "producer" : "Craft",
        "name2" : "CBH 1100",
        "cost_1" : 22500,
        "cost_2" : 15500,
        "batteries" : 1,
        "image" : "craft1110.jpg",
        "new" : 1
    },
    76423 : {
        "name": "Перфоратор",
        "producer" : "Днепр-М",
        "name2" : "ПЕУ-2485",
        "cost_1" : 1199,
        "cost_2" : 1069,
        "batteries" : 0,
        "image" : "dnepr85.jpg",
        "new" : 0
    },
    76424 : {
        "name": "Перфоратор",
        "producer" : "Титан",
        "name2" : "БП75-24",
        "cost_1" : 0,
        "cost_2" : 1285,
        "batteries" : 0,
        "image" : "titan.jpg",
        "new" : 1
    },
    76425 : {
        "name": "Перфоратор",
        "producer" : "Metabo",
        "name2" : "KHE 2444",
        "cost_1" : 4434,
        "cost_2" : 3299,
        "batteries" : 0,
        "image" : "metabo.jpg",
        "new" : 0
    }
};


function getGoods () {
        out += '<div class="col-3 product_item box">';
        if (goods[key].new > 0) {
            out += '<img src="images/newflag.png" class="promo_new product" alt="Новинка">';
        }
        out += '<div class="button_wrap"><button class="btn_green buy"><img class="img_icon basket" src="images/icon-basket.png" alt="icon basket">КУПИТЬ</button>';
        out += '<button class="btn_green">В закладки</button></div>';
        out += '<div class="img_wrap"><img src="images/' + goods[key].image + '" alt="Перфоратор"></div>';
        out += '<div class="title_product">' + goods[key].name + ' <span class="producer">' + goods[key].producer + '</span> ' + goods[key].name2 + '</div>';
        if (goods[key].cost_1 > 0) {
            out += '<div class="old_price">' + goods[key].cost_1 + 'P.</div>';
        }
        if (goods[key].cost_1 == 0){ out += '<div class="old_price"></div>';
        }
        out += '<div class="new_price">' + goods[key].cost_2 + 'P.</div>';
        out += '</div>'
}

out = '';
for(key in goods) {
    getGoods();
}
document.getElementById('product').innerHTML = out;


var filterCost = document.getElementById('cost');
filterCost.onchange =  function() {
    var maxCost = document.getElementById('cost').value;
    document.getElementById('max_cost').innerHTML = maxCost;
}

var filterAll = document.getElementById('filtersALL');
filterAll.onclick =  function() {
    out = '';
    var maxCost = document.getElementById('cost').value;
    var radio = document.getElementsByName('batteries');
    var checkboxProd = document.getElementsByName('producer');
    var typeBattery ='';
    var typeProducer ='';
    for (var i=0; i<radio.length; i++){
        if (radio[i].checked) {
            typeBattery += radio[i].value;
     }
    }
    for (var a=0; a<checkboxProd.length; a++){
        if (checkboxProd[a].checked) {
           typeProducer += checkboxProd[a].value;
        }
    }
    for(key in goods) {
        var prod = goods[key].producer;
        var batteries = goods[key].batteries;
        var costActual = goods[key].cost_2;
        if (typeProducer.indexOf(prod)>=0 && batteries == typeBattery && costActual <= maxCost) {
            getGoods();
            console.log('true');
        }
    }
    document.getElementById('product').innerHTML = out;

    blockHover();
}





// смена блока на ховер для продуктов
function blockHover() {
    var product= document.getElementsByClassName('col-3 product_item box');

    for(var a=0; a<product.length; a++){
        product[a].onmouseover = productHover;
        product[a].onmouseout = productOut;
    }
    function productHover(){
        this.className = 'col-3 product_item box hover';
    }
    function productOut(){
        this.className = 'col-3 product_item box out';
    }
}
blockHover();