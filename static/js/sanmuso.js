const SEIRYOKU = { '夏侯惇': '魏', '典韋': '魏', '張遼': '魏', '曹操': '魏', '許褚': '魏', '夏侯淵': '魏', '徐晃': '魏', '張郃': '魏', '曹仁': '魏', '曹丕': '魏', '甄姫': '魏', '蔡文姫': '魏', '賈詡': '魏', '龐徳': '魏', '王異': '魏', '郭嘉': '魏', '楽進': '魏', '李典': '魏', '于禁': '魏', '荀彧': '魏', '曹休': '魏', '満寵': '魏', '荀攸': '魏', '周瑜': '呉', '陸遜': '呉', '孫尚香': '呉', '甘寧': '呉', '孫堅': '呉', '太史慈': '呉', '呂蒙': '呉', '黄蓋': '呉', '周泰': '呉', '凌統': '呉', '孫策': '呉', '孫権': '呉', '小喬': '呉', '大喬': '呉', '丁奉': '呉', '練師': '呉', '魯粛': '呉', '韓当': '呉', '朱然': '呉', '程普': '呉', '徐盛': '呉', '趙雲': '蜀', '関羽': '蜀', '張飛': '蜀', '諸葛亮': '蜀', '劉備': '蜀', '馬超': '蜀', '黄忠': '蜀', '魏延': '蜀', '関平': '蜀', '龐統': '蜀', '月英': '蜀', '姜維': '蜀', '劉禅': '蜀', '星彩': '蜀', '馬岱': '蜀', '関索': '蜀', '鮑三娘': '蜀', '徐庶': '蜀', '関興': '蜀', '張苞': '蜀', '関銀屏': '蜀', '法正': '蜀', '周倉': '蜀', '夏侯姫': '蜀', '司馬懿': '晋', '司馬師': '晋', '司馬昭': '晋', '鄧艾': '晋', '王元姫': '晋', '鍾会': '晋', '諸葛誕': '晋', '夏侯覇': '晋', '郭淮': '晋', '賈充': '晋', '文鴦': '晋', '張春華': '晋', '辛憲英': '晋', '貂蝉': '他', '呂布': '他', '董卓': '他', '袁紹': '他', '張角': '他', '孟獲': '他', '祝融': '他', '左慈': '他', '陳宮': '他', '呂玲綺': '他', '袁術': '他', '董白': '他', '華雄': '他' };
const BASIC_BONUS = {
  '魏': {
    '条件': '魏', '編成ボーナス名': '魏三傑',
    '攻撃': 30, '防御': 30, '体力': 30, '無双': 30, '気力': 30, '速度': 0,
  },
  '呉': {
    '条件': '呉', '編成ボーナス名': '呉三傑',
    '攻撃': 30, '防御': 30, '体力': 30, '無双': 30, '気力': 30, '速度': 0,
  },
  '蜀': {
    '条件': '蜀', '編成ボーナス名': '蜀三傑',
    '攻撃': 30, '防御': 30, '体力': 30, '無双': 30, '気力': 30, '速度': 0,
  },
  '晋': {
    '条件': '晋', '編成ボーナス名': '晋三傑',
    '攻撃': 30, '防御': 30, '体力': 30, '無双': 30, '気力': 30, '速度': 0,
  },
  '他': {
    '条件': '他', '編成ボーナス名': '他三傑',
    '攻撃': 30, '防御': 30, '体力': 30, '無双': 30, '気力': 30, '速度': 0,
  },
  '攻': {
    '条件': '攻', '編成ボーナス名': '白虎陣',
    '攻撃': 100, '防御': 0, '体力': 0, '無双': 50, '気力': 0, '速度': 0,
  },
  '防': {
    '条件': '防', '編成ボーナス名': '玄武陣',
    '攻撃': 50, '防御': 100, '体力': 0, '無双': 0, '気力': 0, '速度': 0,
  },
  '迅': {
    '条件': '迅', '編成ボーナス名': '黄龍陣',
    '攻撃': 50, '防御': 0, '体力': 0, '無双': 0, '気力': 100, '速度': 0,
  },
  '射': {
    '条件': '射', '編成ボーナス名': '青龍陣',
    '攻撃': 50, '防御': 0, '体力': 0, '無双': 50, '気力': 50, '速度': 0,
  },
  '特': {
    '条件': '特', '編成ボーナス名': '朱雀陣',
    '攻撃': 50, '防御': 0, '体力': 0, '無双': 50, '気力': 50, '速度': 0,
  },
  '同名武将2': {
    '条件': '同名武将2', '編成ボーナス名': '英雄の邂逅',
    '攻撃': 30, '防御': 30, '体力': 30, '無双': 30, '気力': 30, '速度': 0,
  },
  '同名武将3': {
    '条件': '同名武将3', '編成ボーナス名': '英雄の集結',
    '攻撃': 50, '防御': 50, '体力': 50, '無双': 50, '気力': 50, '速度': 0,
  },
};

const STATUS_LABEL = ['攻撃', '防御', '体力', '無双', '気力', '速度'];
const BUSHO_CLASS_LIST = ['攻', '防', '迅', '特', '射'];

const BUSHO_PATTERN = /夏侯惇|典韋|張遼|曹操|許褚|夏侯淵|徐晃|張郃|曹仁|曹丕|甄姫|蔡文姫|賈詡|龐徳|王異|郭嘉|楽進|李典|于禁|荀彧|曹休|満寵|荀攸|周瑜|陸遜|孫尚香|甘寧|孫堅|太史慈|呂蒙|黄蓋|周泰|凌統|孫策|孫権|小喬|大喬|丁奉|練師|魯粛|韓当|朱然|程普|徐盛|趙雲|関羽|張飛|諸葛亮|劉備|馬超|黄忠|魏延|関平|龐統|月英|姜維|劉禅|星彩|馬岱|関索|鮑三娘|徐庶|関興|張苞|関銀屏|法正|周倉|夏侯姫|司馬懿|司馬師|司馬昭|鄧艾|王元姫|鍾会|諸葛誕|夏侯覇|郭淮|賈充|文鴦|張春華|辛憲英|貂蝉|呂布|董卓|袁紹|張角|孟獲|祝融|左慈|陳宮|呂玲綺|袁術|董白|華雄/g;
const CLASS_PATTERN = /攻|防|迅|特|射/g;
const STATUS_PATTERN = /攻撃|防御|体力|無双|気力|速度/g;
const TOP_PATTERN = /\d+/g;
const DEFAULT_BORDER = 50;
const DEFAULT_TOP = 20;

// https://tech-blog.s-yoshiki.com/entry/144
const combination = (nums, k) => {
    let ans = [];
    if (nums.length < k) {
        return []
    }
    if (k === 1) {
        for (let i = 0; i < nums.length; i++) {
            ans[i] = [nums[i]];
        }
    } else {
        for (let i = 0; i < nums.length - k + 1; i++) {
            let row = combination(nums.slice(i + 1), k - 1);
            for (let j = 0; j < row.length; j++) {
                ans.push([nums[i]].concat(row[j]));
            }
        }
    }
    return ans;
}

// https://www.cssscript.com/tags-input-bootstrap-5/
import {default as Tags} from "./tags.js";
function initTags() {
  Tags.init("select:not(.ignore-tags)", {
    clearLabel: 'Clear tag',
    allowClear: true,
  });
  // Multiple inits should not matter
  Tags.init("select:not(.ignore-tags)");

  // // Reset does not fire a change input
  // document.getElementById("regular").addEventListener("change", function (ev) {
  //   console.log(this.selectedOptions);
  // });

  // // Changed is fired properly and you can getInstance if needed
  // document.getElementById("validationTags").addEventListener("change", function (ev) {
  //   /** @type {Tags} */
  //   let inst = Tags.getInstance(this);
  //   console.log(inst.getSelectedValues(), this.selectedOptions);
  // });
  // document.getElementById("singleTags").addEventListener("change", function (ev) {
  //   console.log(this.value);
  // });

  // Test dark mode (emulate in dev console => rendering => emulate)
  if (window.matchMedia) {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkMode) {
      console.log("Dark mode");
    }
    else {
      console.log("Light mode");
    }
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (e.matches) {
        console.log("Dark mode");
      }
      else {
        console.log("Light mode");
      }
    });
  }
}



// https://shanabrian.com/web/javascript/csv-to-json.php
var csvToJson = function(csvStr, userOptions) {
  if (typeof csvStr !== 'string') return null;

  var options = { header : 0, columnName : [], ignoreBlankLine : true };

  if (userOptions) {
    if (userOptions.header) options.header = userOptions.header;
    if (userOptions.columnName) options.columnName = userOptions.columnName;
  }

  var rows = csvStr.split('\n'),
      json = [], line = [], row = '', data = {},
      j, len2;

  for (var i = 0, len = rows.length; i < len; i++) {
    if (i + 1 <= options.header) continue;
    if (options.ignoreBlankLine && rows[i] === '') continue;

    line = rows[i].split(',');

    if (options.columnName.length > 0) {
      data = {};
      for (j = 0, len2 = options.columnName.length; j < len2; j++) {
        if (typeof line[j] !== 'undefined') {
          row = line[j];
          row = row.replace(/^"(.+)?"$/, '$1');
        } else {
          row = null;
        }

        data[options.columnName[j]] = row;
      }
      json.push(data);
    } else {
      json.push(line);
    }
  }

  return json;
};

// https://qiita.com/hiroyuki-n/items/5786c8fc84eb85944681
var special_bonuses;
function load_special_bonuses() {
  var dataPath = './static/data/special-bonus.csv';
  const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
  request.addEventListener('load', (event) => { // ロードさせ実行
    var csvStr = event.target.responseText; // 受け取ったテキストを返す
    var jsonObj = csvToJson(csvStr, {
      header     : 1,
      columnName : csvStr.split('\n')[0].split(','),
    });

    for (var i=0; i<jsonObj.length; i++) {
      var row = jsonObj[i];
      for (var j=0; j<STATUS_LABEL.length; j++) {
        var label = STATUS_LABEL[j];
        row[label] = Number(row[label]);
      }
      jsonObj[i]['編成'] = [row['条件①'], row['条件②'], row['条件③']].filter(element => !(element == '-'));
      delete jsonObj[i]['条件①'];
      delete jsonObj[i]['条件②'];
      delete jsonObj[i]['条件③'];
    }
    special_bonuses = jsonObj;
  });
  request.open('GET', dataPath, true); // csvのパスを指定
  request.send();
}

var busho_data;
var busho_list = [];
var busho_option_list = [];
function load_busho_data() {
  var dataPath = './static/data/busho-data.csv';
  const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
  request.addEventListener('load', (event) => { // ロードさせ実行
    var csvStr = event.target.responseText; // 受け取ったテキストを返す
    var jsonObj = csvToJson(csvStr, {
      header     : 1,
      columnName : csvStr.split('\n')[0].split(','),
    });
    var select = $("select#searchBonus");
    var calc_select = $("select#calcBonus");
    for (var i=0; i<jsonObj.length; i++) {
      var row = jsonObj[i];

      var color_attr;
      var color;
      switch (row['勢力']) {
        case '魏':
        color_attr = {'data-badge-style': 'primary'};
        color = 'primary';
        break;
        case '呉':
        color_attr = {'data-badge-style': 'danger'};
        color = 'danger';
        break;
        case '蜀':
        color_attr = {'data-badge-style': 'success'};
        color = 'success';
        break;
        case '晋':
        color_attr = {'data-badge-style': 'info', 'data-badge-class': 'text-dark'};
        color = 'info';
        break;
        case '他':
        color_attr = {'data-badge-style': 'warning', 'data-badge-class': 'text-dark'};
        color = 'warning';
        break;
      }

      var div_search_dom = $('div.search-busho').find('div#'+row['勢力']);
      if (row['種類'] == '通常') {
        var input_dom = $('<input>').attr({
          type: 'radio',
          class: 'btn-check',
          name: 'search-busho',
          id: row['武将名'],
          value: row['武将名'],
          autocomplete: 'off',
        });
        div_search_dom.append(input_dom);
        var label_dom = $('<label></label>').attr({
          class: 'btn btn-sm btn-outline-'+color,
          for: row['武将名'],
        });
        label_dom.text(row['武将名'])
        div_search_dom.append(label_dom);
      }

      var option_dom = $('<option></option>');
      var busho_text = row['武将名'] + '(' + row['クラス'] + ')';
      option_dom.val(busho_text);
      option_dom.text(busho_text);
      option_dom.attr(color_attr);
      calc_select.append(option_dom);

    }
    initTags();
    busho_data = jsonObj;
  });
  request.open('GET', dataPath, true); // csvのパスを指定
  request.send();
}

function searchBonuses(busho) {
  // 特殊ボーナス
  var bonuses = special_bonuses;
  var _bonuses = [];
  for (var i=0; i<bonuses.length; i++) {
    var bonus = bonuses[i];
    var hensei = bonus['編成'];
    if (hensei.indexOf(busho) !== -1) {
      _bonuses.push(bonus);
    }
  }
  return _bonuses;
}

function bonusToText(bonus) {
  var text = '';

  var total_point = 0;
  var atk_def_point = 0;
  var status_text_list = [];
  for (var i=0; i<STATUS_LABEL.length; i++) {
    var label = STATUS_LABEL[i];
    status_text_list.push(label[0] + ':' + bonus[label]);
    total_point += bonus[label];
    if (['攻撃', '防御'].indexOf(label) !== -1) {
      atk_def_point += bonus[label];
    }
  }

  if (bonus['編成ボーナス名'] !== void 0) {
    text += '[' + bonus['編成ボーナス名'] + ']';
    text += ' (戦力:'+total_point+',攻+防:'+atk_def_point+')\n';
  }

  if (bonus['武将'] !== void 0) {
    text += '['+bonus['武将'] +']';
  }
  if (bonus['ポイント'] !== void 0) {
    text += '('+bonus['ポイント']+')\n';
  }
  text += status_text_list.join() + '\n';

  if (bonus['詳細'] && Object.keys(bonus['詳細']).length) {
    text += '[編成ボーナス 特殊 貢献値]\n';
    for (var i=0; i<bonus['編成'].length; i++) {
      var status_text_list = [];
      var busho = bonus['編成'][i];
      text += busho + ' ';
      for (var j=0; j<STATUS_LABEL.length; j++) {
        var label = STATUS_LABEL[j];
        status_text_list.push(label[0]+':'+bonus['詳細'][busho][label])
      }
      text += status_text_list.join() + '\n';
    }
  } else {
    if (bonus['編成'] !== void 0) {
      text += bonus['編成'].join() + '\n';
    }
  }
  return text;
}

function getBushoList(text) {
  var busho_list = text.match(BUSHO_PATTERN);
  if (busho_list === null) {
    return [];
  }
  return busho_list;
}

function getClassList(text) {
  var class_list = text.match(CLASS_PATTERN);
  if (class_list === null) {
    return [];
  }
  return class_list;
}

function getStatusOrder(text) {
  var status_order = text.match(STATUS_PATTERN);
  if (status_order === null) {
    return [];
  }
  return status_order;
}


function evaluationBonus(bonuses){
  var spec_list = STATUS_LABEL
  var evaluation = {};
  var busho_list = [];
  var detail = {};
  for ( i= 0; i<spec_list.length; i++) {
    evaluation[spec_list[i]] = 0;
  }
  // console.log(bonuses);
  for ( var i=0; i<bonuses.length; i++) {
    var _busho_list = bonuses[i]['編成'];
    if (_busho_list !== void 0) {
      for ( var j=0; j<_busho_list.length; j++) {
        var busho = _busho_list[j];
        if (!(busho in detail)) {
          detail[busho] = {};
          for ( var k= 0; k<spec_list.length; k++) {
            detail[busho][spec_list[k]] = 0;
          }
        }
        for ( var k=0; k<spec_list.length; k++) {
          detail[busho][spec_list[k]] += bonuses[i][spec_list[k]];
        }
      }
      busho_list = busho_list.concat(bonuses[i]['編成']);
    }
    for ( var j=0; j<spec_list.length; j++) {
      evaluation[spec_list[j]] += bonuses[i][spec_list[j]];
    }
  }
  evaluation['編成'] = Array.from(new Set(busho_list));
  evaluation['編成数'] = evaluation['編成'].length;
  evaluation['詳細'] = detail;
  return evaluation;
}

function evaluationBonusByBusho(busho_list, class_list=[]) {
  var basic_bonus = BASIC_BONUS;
  var busho_seiryoku = SEIRYOKU;

  // 勢力ボーナス
  var seiryoku = {};
  for (i=0; i<busho_list.length; i++) {
    var busho = busho_list[i];
    var _seiryoku = busho_seiryoku[busho];
    seiryoku[_seiryoku] = (seiryoku[_seiryoku] || 0) + 1;
  }
  var basic_bonuses = [];
  for (let key in seiryoku) {
    if (seiryoku[key] >= 3) {
      basic_bonuses.push(basic_bonus[key]);
    }
  }
  // console.log(basic_bonuses);

  // クラスボーナス
  var count = {};
  for (var i = 0; i < class_list.length; i++) {
    var _class = class_list[i];
    count[_class] = (count[_class] || 0) + 1;
  }
  for (let _class in count) {
    if (count[_class] >= 3) {
      basic_bonuses.push(basic_bonus[_class]);
    }
  }

  // 同名武将ボーナス
  var count = {};
  var busho_count = 0
  for (var i = 0; i < busho_list.length; i++) {
    var busho = busho_list[i];
    count[busho] = (count[busho] || 0) + 1;
    if (busho_count < count[busho]) {
      busho_count = count[busho];
    }
  }
  if (busho_count >= 3) {
    var count_bonus = basic_bonus['同名武将3']
    basic_bonuses.push(count_bonus);
  } else if (busho_count == 2) {
    var count_bonus = basic_bonus['同名武将2']
    basic_bonuses.push(count_bonus);
  }

  // 特殊ボーナス
  var bonuses = special_bonuses;
  busho_list = busho_list.sort()
  var cnv_busho2 = combination(busho_list, 2);
  var bushos2 = []
  for (i=0; i<cnv_busho2.length; i++) {
    bushos2.push(cnv_busho2[i].join());
  }
  var cnv_busho3 = combination(busho_list, 3);
  var bushos3 = [];
  for (i=0; i<cnv_busho3.length; i++) {
    bushos3.push(cnv_busho3[i].join());
  }

  var _bonuses = []
  for (i=0; i<bonuses.length; i++) {
    var bonus = bonuses[i];
    var hensei = bonus['編成'].sort();
    // console.log(hensei.join());
    if (hensei.length == 2) {
      if (bushos2.indexOf(hensei.join()) >= 0) {
        // console.log(bonus);
        _bonuses.push(bonus);
      }
    }
    if (hensei.length == 3) {
      if (bushos3.indexOf(hensei.join()) >= 0) {
        // console.log(bonus);
        _bonuses.push(bonus);
      }
    }
  }
  _bonuses = basic_bonuses.concat(_bonuses)
  return _bonuses;
}

function kingdom_switch() {
  $('div.search-kingdom-switch').on('change', function(){
    // var kingdom = $('input[name="search-kingdom-switch"]:checked').attr('id');
    var kingdom = $(this).find('input:checked').attr('id');
    var dist_id = $(this).attr('id');
    $(this).parent().parent().find('div.kingdom-switch-dist#'+dist_id).find('div').each(function(){
      if ($(this).attr('id') == kingdom) {
        $(this).removeClass('d-none');
      } else {
        $(this).addClass('d-none');
      }
    });
  })
}

function result_search_bonus() {
  $('div.search-busho').on('change', function(){
    var busho = $('input[name="search-busho"]:checked').attr('id');
    console.log(busho);
    var bonuses = searchBonuses(busho);
    var text = '';
    for (var i=0; i<bonuses.length; i++) {
      text += bonusToText(bonuses[i]);
    }
    text = text.trim();
    var textarea_dom = $("#resultSearchBonus");
    // textarea_dom.attr('rows', text.split('\n').length);
    textarea_dom.val(text);
  })
}

function result_clac_bonus() {

  $("#calcBonus").on('change', function(){
    var busho_text = $('#calcBonus option:selected').text();
    var busho_list = getBushoList(busho_text);
    var class_list = getClassList(busho_text);
    var status_order = getStatusOrder(busho_text);

    var text = '';
    if (busho_list.length > 12) {
      text = '入力できる武将は12までです。';
    } else if (class_list.length > 12) {
      text = '入力されたクラス(攻,防,迅,特,射)が12個より多いです。';
    } else {
      var bonuses = evaluationBonusByBusho(busho_list, class_list);
      var bonus = evaluationBonus(bonuses);
      bonus['編成ボーナス名'] = '総合ボーナス';
      text += bonusToText(bonus);

      text += '\n------------ 詳細 ------------\n';
      for (var i=0; i<bonuses.length; i++) {
        text += bonusToText(bonuses[i]);
      }
    }
    text = text.trim();
    var textarea_dom = $("#resultTextarea");
    // textarea_dom.attr('rows', text.split('\n').length);
    textarea_dom.val(text);
  });
}

$(function() {
  load_special_bonuses();
  load_busho_data();
  result_search_bonus();
  result_clac_bonus();

  kingdom_switch();

});



