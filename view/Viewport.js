var win1,win2,win3,win4,win5,win6,win7,win8,win9,win10,win11,win12,win13,win14,win15,win16,win17,win18,win19,win20,
	l1 = [
			[10,40], [315,40], [925,40], [10,145],
			[10,565], [925,145], [10,355], [620,565],
			[925,460], [1230,40], [10,985], [1230,880],
			[1230,460], [620,985]	
		],
	l2= [
			[315,1195], [10,40], [620,460], [10,565],
			[1230,40], [10,1195], [315,565], [620,40],
			[925,460], [1230,880], [1230,460], [620,985],
			[10,775], [620,565]
		],
	l3= [
			[925,1405], [1230,40], [1230,1195], [620,1300],
			[620,40], [1535,985], [1230,985], [10,460],
			[925,1300], [1230,565], [10,40], [10,880],
			[620,880], [620,460]
		],
	l4= [
			[925,355], [620,880], [925,250], [315,1300],
			[1230,460], [620,40], [925,40], [620,460],
			[620,355], [10,40], [10,460], [10,880],
			[1230,880], [1230,40]
		],
	l5= [
			[10,460], [620,460], [1535,460], [10,565],
			[1230,40], [315,460], [10,1195], [1230,565],
			[1230,460], [10,775], [620,985], [620,40],
			[1230,985], [10,40]
		],
	l6= [
			[1535,250], [315,40], [1535,355], [1535,40],
			[620,985], [10,250], [10,40], [620,565],
			[925,460], [10,985], [10,565], [1230,880],
			[925,40], [1230,460]
		],
	l7= [
			[1230,40], [620,250], [10,40], [315,40],
			[620,775], [1535,40], [925,40], [620,1195],
			[620,40], [10,670], [1230,775], [10,250],
			[10,1090], [1230,355]
		],
	l8= [
			[620,355], [620,460], [925,355], [925,145],
			[620,985], [620,40], [1535,1300], [1230,40],
			[925,40], [1230,460], [10,40], [10,880],
			[1230,880], [10,460]
		],
	l9= [
			[1535,880], [620,40], [1535,1300], [1230,1090],
			[10,880], [1535,985], [1230,880], [10,40],
			[1230,1300], [620,985], [620,565], [1230,460],
			[10,460], [1230,40]
		],
	l10= [
			[315,1300], [620,460], [1230,145], [315,40],
			[1230,670], [1230,1090], [315,1090], [620,985],
			[1230,40], [620,1405], [620,40], [10,670],
			[10,250], [1230,250]
		];

Ext.util.Region.override({
    colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
    nextColor: 0,
    show: function(){
        var style = {
            display: 'block',
            position: 'absolute',
            top: this.top + 'px',
            left: this.left + 'px',
            height: ((this.bottom - this.top) + 1) + 'px',
            width: ((this.right - this.left) + 1) + 'px',
            opacity: 0.3,
            'pointer-events': 'none',
            'z-index': 9999999
        };
        if (!this.highlightEl) {
            style['background-color'] = this.colors[this.nextColor];
            Ext.util.Region.prototype.nextColor++;
            this.highlightEl = Ext.getBody().createChild({
                style: style
            });
            if (this.nextColor >= this.colors.length) {
                this.nextColor = 0;
            }
        } else {
            this.highlightEl.setStyle(style);
        }
    },
    hide: function(){
        if (this.highlightEl) {
            this.highlightEl.setStyle({
                display: 'none'
            });
        }
    }
});

win1 = Ext.create('Ext.Window', {
        title: 'Demo Window 1',
        width: 300,
        height: 100,
        x: 10,
        y: 40,
        resizable:false,
        layout: 'fit',
        items: {
        	html: '<div style="padding:5px">this is a floating window.</div>',
        	border: false
        }
});

function generateData(n, floor){
	var data = [],
        p = (Math.random() *  11) + 1,
        i;
            
    floor = (!floor && floor !== 0)? 20 : floor;
        
    for (i = 0; i < (n || 12); i++) {
    	data.push({
            name: Ext.Date.monthNames[i % 12],
            data1: Math.floor(Math.max((Math.random() * 100), floor)),
            data2: Math.floor(Math.max((Math.random() * 100), floor)),
            data3: Math.floor(Math.max((Math.random() * 100), floor)),
            data4: Math.floor(Math.max((Math.random() * 100), floor)),
            data5: Math.floor(Math.max((Math.random() * 100), floor)),
            data6: Math.floor(Math.max((Math.random() * 100), floor)),
            data7: Math.floor(Math.max((Math.random() * 100), floor)),
            data8: Math.floor(Math.max((Math.random() * 100), floor)),
            data9: Math.floor(Math.max((Math.random() * 100), floor))
        });
    }
	return data;
};

var store1 = Ext.create('Ext.data.JsonStore', {
	fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data9', 'data9'],
    data: generateData()
});

win2 = Ext.create('Ext.Window', {
        width: 605,
        height: 520,
        minHeight: 400,
        minWidth: 550,
        x: 315,
        y: 40,
        resizable:false,
        hidden: false,
        maximizable: false,
        title: 'Bar Renderer',
        renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [{
            text: 'Reload Data',
            handler: function() {
                store1.loadData(generateData());
            }
        }],
        items: {
            xtype: 'chart',
            animate: true,
            style: 'background:#fff',
            shadow: false,
            store: store1,
            axes: [{
                type: 'Numeric',
                position: 'bottom',
                fields: ['data1'],
                label: {
                   renderer: Ext.util.Format.numberRenderer('0,0')
                },
                title: 'Number of Hits',
                minimum: 0
            }, {
                type: 'Category',
                position: 'left',
                fields: ['name'],
                title: 'Month of the Year'
            }],
            series: [{
                type: 'bar',
                axis: 'bottom',
                label: {
                    display: 'insideEnd',
                    field: 'data1',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'horizontal',
                    color: '#333',
                    'text-anchor': 'middle',
                    contrast: true
                },
                xField: 'name',
                yField: ['data1'],
                //color renderer
                renderer: function(sprite, record, attr, index, store) {
                    var fieldValue = Math.random() * 20 + 10;
                    var value = (record.get('data1') >> 0) % 5;
                    var color = ['rgb(213, 70, 121)', 
                                 'rgb(44, 153, 201)', 
                                 'rgb(146, 6, 157)', 
                                 'rgb(49, 149, 0)', 
                                 'rgb(249, 153, 0)'][value];
                    return Ext.apply(attr, {
                        fill: color
                    });
                }
            }]
        }
    });

win3 = Ext.create('Ext.Window', {
        title: 'Demo Window 3',
        width: 300,
        height: 100,
        x: 925,
        y: 40,
        resizable:false,
        layout: 'fit',
        items: {
        	html: '<div style="padding:5px">This is window number <strong>3</strong>.</div>',
        	border: false
        }
});

win4 = Ext.create('Ext.Window', {
        title: 'Washington Post',
        width: 300,
        height: 205,
        x: 10,
        y: 145,
        resizable:false,
        layout: 'fit',
        items: {
        	html: '<div style="padding:5px">HUDSON, N.H. — An assault on Mitt Romney’s business career intensified Monday after the front-runner for the Republican presidential nomination made an ­off-the-cuff comment that his opponents say shows he was a corporate predator who sought profits at the expense of workers.<br /><br />At a breakfast of business leaders in Nashua, N.H., Romney said, “I like being able to fire people who provide services to me.” The former Massachusetts governor was referring to health insurers&hellip;</div>',
        	border: false
        }
});

var win5Data = [
        ['3m Co',                               71.72, 0.02,  0.03,  '9/1 12:00am'],
        ['Alcoa Inc',                           29.01, 0.42,  1.47,  '9/1 12:00am'],
        ['Altria Group Inc',                    83.81, 0.28,  0.34,  '9/1 12:00am'],
        ['American Express Company',            52.55, 0.01,  0.02,  '9/1 12:00am'],
        ['American International Group, Inc.',  64.13, 0.31,  0.49,  '9/1 12:00am'],
        ['AT&T Inc.',                           31.61, -0.48, -1.54, '9/1 12:00am'],
        ['Boeing Co.',                          75.43, 0.53,  0.71,  '9/1 12:00am'],
        ['Caterpillar Inc.',                    67.27, 0.92,  1.39,  '9/1 12:00am'],
        ['Citigroup, Inc.',                     49.37, 0.02,  0.04,  '9/1 12:00am'],
        ['E.I. du Pont de Nemours and Company', 40.48, 0.51,  1.28,  '9/1 12:00am'],
        ['Exxon Mobil Corp',                    68.1,  -0.43, -0.64, '9/1 12:00am'],
        ['General Electric Company',            34.14, -0.08, -0.23, '9/1 12:00am'],
        ['General Motors Corporation',          30.27, 1.09,  3.74,  '9/1 12:00am'],
        ['Hewlett-Packard Co.',                 36.53, -0.03, -0.08, '9/1 12:00am'],
        ['Honeywell Intl Inc',                  38.77, 0.05,  0.13,  '9/1 12:00am'],
        ['Intel Corporation',                   19.88, 0.31,  1.58,  '9/1 12:00am'],
        ['International Business Machines',     81.41, 0.44,  0.54,  '9/1 12:00am'],
        ['Johnson & Johnson',                   64.72, 0.06,  0.09,  '9/1 12:00am'],
        ['JP Morgan & Chase & Co',              45.73, 0.07,  0.15,  '9/1 12:00am'],
        ['McDonald\'s Corporation',             36.76, 0.86,  2.40,  '9/1 12:00am'],
        ['Merck & Co., Inc.',                   40.96, 0.41,  1.01,  '9/1 12:00am'],
        ['Microsoft Corporation',               25.84, 0.14,  0.54,  '9/1 12:00am'],
        ['Pfizer Inc',                          27.96, 0.4,   1.45,  '9/1 12:00am'],
        ['The Coca-Cola Company',               45.07, 0.26,  0.58,  '9/1 12:00am'],
        ['The Home Depot, Inc.',                34.64, 0.35,  1.02,  '9/1 12:00am'],
        ['The Procter & Gamble Company',        61.91, 0.01,  0.02,  '9/1 12:00am'],
        ['United Technologies Corporation',     63.26, 0.55,  0.88,  '9/1 12:00am'],
        ['Verizon Communications',              35.57, 0.39,  1.11,  '9/1 12:00am'],
        ['Wal-Mart Stores, Inc.',               45.45, 0.73,  1.63,  '9/1 12:00am']
    ];

    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    function change(val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '</span>';
        }
        return val;
    }

    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    function pctChange(val) {
        if (val > 0) {
            return '<span style="color:green;">' + val + '%</span>';
        } else if (val < 0) {
            return '<span style="color:red;">' + val + '%</span>';
        }
        return val;
    }

    // create the data store
    var store5 = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'company'},
           {name: 'price',      type: 'float'},
           {name: 'change',     type: 'float'},
           {name: 'pctChange',  type: 'float'},
           {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
        ],
        data: win5Data
    });

    // create the Grid
    var grid5 = Ext.create('Ext.grid.Panel', {
        store: store5,
        columnLines: true,
        columns: [{
            text     : 'Company',
            flex     : 1,
            sortable : false,
            dataIndex: 'company'
        }, {
            text: 'Stock Price',
            columns: [{
                text     : 'Price',
                width    : 75,
                sortable : true,
                renderer : 'usMoney',
                dataIndex: 'price'
            }, {
                text     : 'Change',
                width    : 75,
                sortable : true,
                renderer : change,
                dataIndex: 'change'
            }, {
                text     : '% Change',
                width    : 75,
                sortable : true,
                renderer : pctChange,
                dataIndex: 'pctChange'
            }]
        }, {
            text     : 'Last Updated',
            width    : 85,
            sortable : true,
            renderer : Ext.util.Format.dateRenderer('m/d/Y'),
            dataIndex: 'lastChange'
        }],
        height: 380,
        width: 593,
        //title: 'Grouped Header Grid',
        viewConfig: {
            stripeRows: true
        }
    });

win5 = Ext.create('Ext.Window', {
        title: 'Grouped Header Grid',
        //width: 300,
        //height: 605,
        x: 10,
        y: 565,
        resizable:false,
        layout: 'fit',
        /*tbar: [{
            text: 'Reload Data',
            handler: function() {
                for(var i=0, l=win5Data.length; i < l; i++) {
                	var dataPoint = win5Data[i];
                	var result = Math.round(Math.random()*Math.pow(20,2))/Math.pow(10,2);
                	var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
                	result = result * plusOrMinus;
                	var perc = Math.round((result + result/2)*Math.pow(10,2))/Math.pow(10,2);
                	
                	dataPoint[2] = result;
                	dataPoint[3] = perc;
                }
                store5.load();
            }
        }],*/
        items: [
        	grid5
        ]
});

var sencha = Ext.create('Ext.draw.Component', {
        width: 288,
        height: 275,
        resizable:false,
        gradients: [{
            id: 'grad1',
            angle: 100,
            stops: {
                0: {
                    color: '#AACE36'
                },
                100: {
                    color: '#2FA042'
                }
            }
        }, {
            id: 'grad2',
            angle: 21,
            stops: {
                0: {
                    color: '#79A933'
                },
                13: {
                    color: '#70A333'
                },
                34: {
                    color: '#559332'
                },
                58: {
                    color: '#277B2F'
                },
                86: {
                    color: '#005F27'
                },
                100: {
                    color: '#005020'
                }
            }
        }, {
            id: 'grad3',
            angle: 55,
            stops: {
                0: {
                    color: '#79AB35'
                },
                53: {
                    color: '#7CBA3D'
                },
                100: {
                    color: '#00AA4B'
                }
            }
        }],
        items: [{
            type: 'path',
            path: ['M0,109.718c0-43.13,24.815-80.463,60.955-98.499L82.914,0C68.122,7.85,58.046,23.406,58.046,41.316',
            'c0,9.64,2.916,18.597,7.915,26.039c-7.44,18.621-11.77,37.728-13.228,56.742c-9.408,4.755-20.023,7.423-31.203,7.424',
            'c-1.074,0-2.151-0.025-3.235-0.075c-5.778-0.263-11.359-1.229-16.665-2.804L0,109.718z M157.473,285.498c0-0.015,0-0.031,0-0.047',
            'C157.473,285.467,157.473,285.482,157.473,285.498 M157.473,285.55c0-0.014,0-0.027,0-0.04',
            'C157.473,285.523,157.473,285.536,157.473,285.55 M157.472,285.604c0-0.015,0.001-0.031,0.001-0.046',
            'C157.473,285.574,157.472,285.588,157.472,285.604 M157.472,285.653c0-0.012,0-0.024,0-0.037',
            'C157.472,285.628,157.472,285.641,157.472,285.653 M157.472,285.708c0-0.015,0-0.028,0-0.045',
            'C157.472,285.68,157.472,285.694,157.472,285.708 M157.472,285.756c0-0.012,0-0.023,0-0.034',
            'C157.472,285.733,157.472,285.745,157.472,285.756 M157.471,285.814c0-0.014,0-0.028,0.001-0.042',
            'C157.471,285.785,157.471,285.8,157.471,285.814 M157.471,285.858c0-0.008,0-0.017,0-0.026',
            'C157.471,285.841,157.471,285.85,157.471,285.858 M157.47,285.907c0.001-0.008,0.001-0.018,0.001-0.026',
            'C157.471,285.889,157.471,285.898,157.47,285.907 M157.47,285.964c0-0.009,0-0.017,0-0.023',
            'C157.47,285.949,157.47,285.955,157.47,285.964 M157.469,286.01c0-0.008,0.001-0.016,0.001-0.022',
            'C157.47,285.995,157.469,286.002,157.469,286.01 M157.469,286.069c0-0.008,0-0.016,0-0.022',
            'C157.469,286.053,157.469,286.062,157.469,286.069 M157.468,286.112c0-0.005,0-0.011,0-0.017',
            'C157.468,286.101,157.468,286.107,157.468,286.112 M157.467,286.214c0-0.003,0-0.006,0-0.008',
            'C157.467,286.208,157.467,286.212,157.467,286.214'].join(''),
            fill: '#C5D83E'
        }, {
            type: 'path',
            path: ['M66.218,210.846l-6.824-3.421c-0.016-0.009-0.033-0.018-0.048-0.025',
            'c-0.006-0.003-0.013-0.007-0.019-0.01c-0.01-0.005-0.017-0.009-0.028-0.015c-0.009-0.005-0.016-0.008-0.025-0.013',
            'c-0.008-0.005-0.012-0.007-0.021-0.011c-0.009-0.005-0.018-0.01-0.027-0.014c-0.007-0.005-0.013-0.008-0.02-0.012',
            'c-0.009-0.005-0.02-0.01-0.029-0.015c-0.006-0.003-0.007-0.004-0.014-0.007c-0.038-0.021-0.074-0.039-0.113-0.06',
            'c-0.002-0.001-0.006-0.003-0.008-0.005c-0.013-0.006-0.023-0.011-0.035-0.018c-0.005-0.002-0.007-0.003-0.011-0.006',
            'c-0.011-0.005-0.025-0.014-0.036-0.02c-0.004-0.002-0.005-0.002-0.009-0.004c-0.013-0.007-0.025-0.014-0.038-0.02l-0.003-0.002',
            'c-29.686-15.598-51.36-44.362-57.28-78.53c5.306,1.575,10.887,2.541,16.665,2.804c1.084,0.05,2.161,0.075,3.235,0.075',
            'c11.18-0.001,21.795-2.669,31.203-7.424C50.44,154.002,55.248,183.676,66.218,210.846'].join(''),
            fill: 'url(#grad1)'
        }, {
            type: 'path',
            path: ['M88.093,85.247l-3.657-1.834c-0.214-0.103-0.426-0.208-0.638-0.315h-0.001',
            'c-0.015-0.008-0.029-0.015-0.044-0.022l-0.001-0.001c-0.014-0.007-0.028-0.014-0.042-0.021c-0.001-0.001-0.003-0.002-0.004-0.002',
            'c-0.014-0.007-0.027-0.014-0.04-0.02c-0.003-0.002-0.003-0.002-0.006-0.004c-0.013-0.006-0.025-0.012-0.037-0.018',
            'c-0.003-0.002-0.006-0.004-0.009-0.005c-0.011-0.006-0.022-0.011-0.033-0.017c-0.004-0.002-0.008-0.004-0.013-0.006',
            'c-0.009-0.005-0.018-0.01-0.027-0.014c-0.006-0.003-0.013-0.007-0.018-0.01c-0.006-0.003-0.013-0.006-0.019-0.009',
            'c-0.01-0.005-0.018-0.009-0.027-0.014c-0.001-0.001-0.003-0.002-0.004-0.002c-7.075-3.631-13.103-9.016-17.512-15.578',
            'c-7.44,18.621-11.77,37.728-13.228,56.742c12.607-6.37,23.053-16.485,29.815-28.949L88.093,85.247z M213.364,195.358',
            'c-25.889,17.124-56.849,27.05-89.924,27.05c-2.519,0-5.05-0.057-7.591-0.174c-14.436-0.662-28.343-3.192-41.515-7.32l56.748,28.445',
            'c15.615,7.571,26.39,23.571,26.39,42.092v0.107c0,0.015-0.001,0.031-0.001,0.046v0.168c-0.001,0.014-0.001,0.028-0.001,0.042v0.066',
            'c0,0.009,0,0.019-0.001,0.026v0.081c0,0.007-0.001,0.015-0.001,0.022v0.059c0,0.009-0.001,0.019-0.001,0.026v0.017',
            'c0,0.032-0.001,0.063-0.001,0.095v0.008c-0.192,12.063-4.956,23.016-12.633,31.202c-3.517,3.753-7.647,6.924-12.23,9.355',
            'l14.101-7.202l7.859-4.011c36.137-18.041,60.955-55.376,60.955-98.509L213.364,195.358z'].join(''),
            fill: 'url(#grad2)'
        }, {
            type: 'path',
            path: ['M123.44,222.408c-2.519,0-5.05-0.057-7.591-0.174c-14.436-0.662-28.343-3.192-41.515-7.32',
            'l-8.117-4.067c-10.97-27.17-15.778-56.844-13.485-86.749c12.607-6.37,23.053-16.485,29.815-28.949l5.545-9.901l68.032,34.101',
            'c2.462,1.278,4.871,2.648,7.22,4.102c0.006,0.004,0.009,0.006,0.016,0.01c0.009,0.005,0.018,0.011,0.025,0.016',
            'c0.009,0.005,0.02,0.011,0.028,0.017c0.002,0.001,0.008,0.005,0.01,0.006c25.392,15.756,43.88,41.564,49.94,71.859',
            'C187.476,212.482,156.516,222.408,123.44,222.408'].join(''),
            fill: 'url(#grad3)'
        }]
    });

win6 = Ext.create('Ext.Window', {
        title: 'Sencha Logo',
        //width: 300,
        //height: 100,
        x: 925,
        y: 145,
        resizable:false,
        layout: 'fit',
        items: [sencha]
});

var store7 = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: 'check-nodes.json'
        },
        sorters: [{
            property: 'leaf',
            direction: 'ASC'
        }, {
            property: 'text',
            direction: 'ASC'
        }]
    });

    var tree7 = Ext.create('Ext.tree.Panel', {
        store: store7,
        rootVisible: false,
        useArrows: true,
        //frame: true,
        //title: 'Check Tree',
        //width: 200,
        //height: 250,
        dockedItems: [{
            xtype: 'toolbar',
            items: {
                text: 'Get checked nodes',
                handler: function(){
                    var records = tree7.getView().getChecked(),
                        names = [];
                    
                    Ext.Array.each(records, function(rec){
                        names.push(rec.get('text'));
                    });
                    
                    Ext.MessageBox.show({
                        title: 'Selected Nodes',
                        msg: names.join('<br />'),
                        icon: Ext.MessageBox.INFO
                    });
                }
            }
        }]
    });

win7 = Ext.create('Ext.Window', {
        title: 'Check Tree',
        width: 300,
        height: 205,
        x: 10,
        y: 355,
        resizable:false,
        layout: 'fit',
        items: [ tree7 ]
});

var storew8 = Ext.create('Ext.data.JsonStore', {
	fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data9', 'data9'],
    data: generateData()
});

win8 = Ext.create('Ext.Window', {
        title: 'Radar Graph',
        width: 605,
        height: 415,
        x: 620,
        y: 565,
        resizable:false,
        layout: 'fit',
        tbar: [{
            text: 'Reload Data',
            handler: function() {
                storew8.loadData(generateData());
            }
        }],
        items: {
            id: 'chartCmp5',
            xtype: 'chart',
            style: 'background:#fff',
            theme: 'Category2',
            insetPadding: 20,
            animate: false,
            store: storew8,
            legend: {
                position: 'right'
            },
            axes: [{
                type: 'Radial',
                position: 'radial',
                label: {
                    display: true
                }
            }],
            series: [{
                showInLegend: true,
                type: 'radar',
                xField: 'name',
                yField: 'data1',
                style: {
                    opacity: 0.4
                }
            },{
                showInLegend: true,
                type: 'radar',
                xField: 'name',
                yField: 'data2',
                style: {
                    opacity: 0.4
                }
            },{
                showInLegend: true,
                type: 'radar',
                xField: 'name',
                yField: 'data3',
                style: {
                    opacity: 0.4
                }
        }]}
});

win9 = Ext.create('Ext.Window', {
        title: 'Demo Window 9',
        width: 300,
        height: 100,
        x: 925,
        y: 460,
        resizable:false,
        layout: 'fit',
        items: {
        	html: '<div style="padding:5px"><strong>Number nine,</strong> Number nine, <span style="font-size:90%">Number nine,</span> <span style="font-size:80%">Number nine,</span> <span style="font-size:70%">Number nine...</span></div>',
        	border: false
        }
});

var jsonData = [
    {
        date: '1/1/2009',
        IE: 44.8,
        Firefox: 45.5,
        Chrome: 3.9,
        Safari: 3,
        Opera: 2.3,
        Other: 0.5
    },
    {
        date: '2/1/2009',
        IE: 43.6,
        Firefox: 46.4,
        Chrome: 4,
        Safari: 3,
        Opera: 2.2,
        Other: 0.8
    },
    {
        date: '3/1/2009',
        IE: 43.3,
        Firefox: 46.5,
        Chrome: 4.2,
        Safari: 3.1,
        Opera: 2.3,
        Other: 0.6
    },
    {
        date: '4/1/2009',
        IE: 42.1,
        Firefox: 47.1,
        Chrome: 4.9,
        Safari: 3,
        Opera: 2.2,
        Other: 0.7
    },
    {
        date: '5/1/2009',
        IE: 41,
        Firefox: 47.7,
        Chrome: 5.5,
        Safari: 3,
        Opera: 2.2,
        Other: 0.6
    },
    {
        date: '6/1/2009',
        IE: 40.7,
        Firefox: 47.3,
        Chrome: 6,
        Safari: 3.1,
        Opera: 2.1,
        Other: 0.8
    },
    {
        date: '7/1/2009',
        IE: 39.4,
        Firefox: 47.9,
        Chrome: 6.5,
        Safari: 3.3,
        Opera: 2.1,
        Other: 0.8
    },
    {
        date: '8/1/2009',
        IE: 39.3,
        Firefox: 47.4,
        Chrome: 7,
        Safari: 3.3,
        Opera: 2.1,
        Other: 0.9
    },
    {
        date: '9/1/2009',
        IE: 39.6,
        Firefox: 46.6,
        Chrome: 7.1,
        Safari: 3.6,
        Opera: 2.2,
        Other: 0.9
    },
    {
        date: '10/1/2009',
        IE: 37.5,
        Firefox: 47.5,
        Chrome: 8,
        Safari: 3.8,
        Opera: 2.3,
        Other: 0.9
    },
    {
        date: '11/1/2009',
        IE: 37.7,
        Firefox: 47,
        Chrome: 8.5,
        Safari: 3.8,
        Opera: 2.3,
        Other: 0.7
    },
    {
        date: '12/1/2009',
        IE: 37.2,
        Firefox: 46.4,
        Chrome: 9.8,
        Safari: 3.6,
        Opera: 2.3,
        Other: 0.7
    },
    {
        date: '1/1/2010',
        IE: 36.2,
        Firefox: 46.3,
        Chrome: 10.8,
        Safari: 3.7,
        Opera: 2.2,
        Other: 0.8
    },
    {
        date: '2/1/2010',
        IE: 35.3,
        Firefox: 46.5,
        Chrome: 11.6,
        Safari: 3.8,
        Opera: 2.1,
        Other: 0.7
    },
    {
        date: '3/1/2010',
        IE: 34.9,
        Firefox: 46.2,
        Chrome: 12.3,
        Safari: 3.7,
        Opera: 2.2,
        Other: 0.7
    },
    {
        date: '4/1/2010',
        IE: 33.4,
        Firefox: 46.4,
        Chrome: 13.6,
        Safari: 3.7,
        Opera: 2.2,
        Other: 0.7
    },
    {
        date: '5/1/2010',
        IE: 32.2,
        Firefox: 46.9,
        Chrome: 14.5,
        Safari: 3.5,
        Opera: 2.2,
        Other: 0.7
    },
    {
        date: '6/1/2010',
        IE: 31,
        Firefox: 46.6,
        Chrome: 15.9,
        Safari: 3.6,
        Opera: 2.1,
        Other: 0.8
    },
    {
        date: '7/1/2010',
        IE: 30.4,
        Firefox: 46.4,
        Chrome: 16.7,
        Safari: 3.4,
        Opera: 2.3,
        Other: 0.8
    },
    {
        date: '8/1/2010',
        IE: 30.7,
        Firefox: 45.8,
        Chrome: 17,
        Safari: 3.5,
        Opera: 2.3,
        Other: 0.7
    },
    {
        date: '9/1/2010',
        IE: 31.1,
        Firefox: 45.1,
        Chrome: 17.3,
        Safari: 3.7,
        Opera: 2.2,
        Other: 0.6
    },
    {
        date: '10/1/2010',
        IE: 29.7,
        Firefox: 44.1,
        Chrome: 19.2,
        Safari: 3.9,
        Opera: 2.2,
        Other: 0.9
    },
    {
        date: '11/1/2010',
        IE: 28.6,
        Firefox: 44,
        Chrome: 20.5,
        Safari: 4.0,
        Opera: 2.3,
        Other: 0.6
    },
    {
        date: '12/1/2010',
        IE: 27.5,
        Firefox: 43.5,
        Chrome: 22.4,
        Safari: 3.8,
        Opera: 2.2,
        Other: 0.6
    }
];

var fields = ['IE', 'Chrome', 'Firefox', 'Safari', 'Opera', 'Other'];

var browserStore = Ext.create('Ext.data.JsonStore', {
	fields: fields,
	data: jsonData
});

var colors = ['rgb(47, 162, 223)',
                  'rgb(60, 133, 46)',
                  'rgb(234, 102, 17)',
                  'rgb(154, 176, 213)',
                  'rgb(186, 10, 25)',
                  'rgb(40, 40, 40)'];
               
Ext.chart.theme.Browser = Ext.extend(Ext.chart.theme.Base, {
        constructor: function(config) {
            Ext.chart.theme.Base.prototype.constructor.call(this, Ext.apply({
                colors: colors
            }, config));
        }
    });



win10 = Ext.create('Ext.Window', {
        width: 605,
        height: 415,
        minHeight: 400,
        minWidth: 550,
        hidden: false,
        shadow: false,
        resizable:false,
        x: 1230,
        y: 40,
        maximizable: false,
        title: 'What is the trend in Browser Usage?',
        //renderTo: Ext.getBody(),
        layout: 'fit',
        items: {
            id: 'chartCmp',
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            theme: 'Browser:gradients',
            defaultInsets: 30,
            store: browserStore,
            legend: {
                position: 'right'
            },
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: fields,
                title: 'Usage %',
                grid: true,
                decimals: 0,
                minimum: 0,
                maximum: 100
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['date'],
                title: 'Month of the Year',
                label: {
                    renderer: function(v) {
                        return v.match(/([0-9]*)\/[0-9]*\/[0-9][0-9]([0-9]*)/).slice(1).join('/');
                    }
                }
            }],
            series: [{
                type: 'area',
                axis: 'left',
                highlight: true,
                tips: {
                  trackMouse: true,
                  width: 170,
                  height: 28,
                  renderer: function(storeItem, item) {
                      this.setTitle(item.storeField + ' - '
                              + Ext.Date.format(new Date(storeItem.get('date')), 'M y')
                              + ' - ' + storeItem.get(item.storeField) + '%');
                  }
                },
                xField: 'name',
                yField: fields,
                style: {
                    lineWidth: 1,
                    stroke: '#666',
                    opacity: 0.86
                }
            }]
        }
    });

var store11 = Ext.create('Ext.data.JsonStore', {
	fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data9', 'data9'],
    data: generateData()
});

store11.loadData(generateData(6, 20));

win11 = Ext.create('Ext.Window', {
        title: 'Semester Trends',
        width: 605,
        height: 415,
        x: 10,
        y: 985,
        resizable:false,
        layout: 'fit',
        tbar: [{
            text: 'Reload Data',
            handler: function() {
                store11.loadData(generateData(6, 20));
            }
        }],
        items: {
            xtype: 'chart',
            id: 'chartCmp20',
            style: 'background:#fff',
            animate: true,
            store: store11,
            shadow: true,
            legend: {
                position: 'right'
            },
            insetPadding: 60,
            theme: 'Base:gradients',
            series: [{
                type: 'pie',
                field: 'data1',
                showInLegend: true,
                //donut: win11,
                tips: {
                  trackMouse: true,
                  width: 140,
                  height: 28,
                  renderer: function(storeItem, item) {
                    //calculate percentage.
                    var total = 0;
                    store11.each(function(rec) {
                        total += rec.get('data1');
                    });
                    this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('data1') / total * 100) + '%');
                  }
                },
                highlight: {
                  segment: {
                    margin: 20
                  }
                },
                label: {
                    field: 'name',
                    display: 'rotate',
                    contrast: true,
                    font: '18px Arial'
                }
            }]
        }
});

var Renderers = {};

(function() {
     var ColorManager = {
       rgbToHsv: function(rgb) {
           var r = rgb[0] / 255,
               g = rgb[1] / 255,
               b = rgb[2] / 255,
               rd = Math.round,
               minVal = Math.min(r, g, b),
               maxVal = Math.max(r, g, b),
               delta = maxVal - minVal,
               h = 0, s = 0, v = 0,
               deltaRgb;

           v = maxVal;

           if (delta == 0) {
             return [0, 0, v];
           } else {
             s = delta / maxVal;
             deltaRgb = {
                 r: (((maxVal - r) / 6) + (delta / 2)) / delta,
                 g: (((maxVal - g) / 6) + (delta / 2)) / delta,
                 b: (((maxVal - b) / 6) + (delta / 2)) / delta
             };
             if (r == maxVal) {
                 h = deltaRgb.b - deltaRgb.g;
             } else if (g == maxVal) {
                 h = (1 / 3) + deltaRgb.r - deltaRgb.b;
             } else if (b == maxVal) {
                 h = (2 / 3) + deltaRgb.g - deltaRgb.r;
             }
             //handle edge cases for hue
             if (h < 0) {
                 h += 1;
             }
             if (h > 1) {
                 h -= 1;
             }
           }

           h = rd(h * 360);
           s = rd(s * 100);
           v = rd(v * 100);

           return [h, s, v];
       },

       hsvToRgb : function(hsv) {
           var h = hsv[0] / 360,
               s = hsv[1] / 100,
               v = hsv[2] / 100,
               r, g, b, rd = Math.round;

           if (s == 0) {
             v *= 255;
             return [v, v, v];
           } else {
             var vh = h * 6,
                 vi = vh >> 0,
                 v1 = v * (1 - s),
                 v2 = v * (1 - s * (vh - vi)),
                 v3 = v * (1 - s * (1 - (vh - vi)));

             switch(vi) {
                 case 0:
                     r = v; g = v3; b = v1;
                     break;
                 case 1:
                     r = v2; g = v; b = v1;
                     break;
                 case 2:
                     r = v1; g = v; b = v3;
                     break;
                 case 3:
                     r = v1; g = v2; b = v;
                     break;
                 case 4:
                     r = v3; g = v1; b = v;
                     break;
                 default:
                     r = v; g = v1; b = v2;
             }
             return [rd(r * 255),
                     rd(g * 255),
                     rd(b * 255)];
           }
       }
    };
    //Generic number interpolator
    var delta = function(x, y, a, b, theta) {
            return a + (b - a) * (y - theta) / (y - x);
    };
    //Add renderer methods.
    Ext.apply(Renderers, {
        color: function(fieldName, minColor, maxColor, minValue, maxValue) {
            var re = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)\s*/,
                minColorMatch = minColor.match(re),
                maxColorMatch = maxColor.match(re),
                interpolate = function(theta) {
                    return [ delta(minValue, maxValue, minColor[0], maxColor[0], theta),
                             delta(minValue, maxValue, minColor[1], maxColor[1], theta),
                             delta(minValue, maxValue, minColor[2], maxColor[2], theta) ];
                };
            minColor = ColorManager.rgbToHsv([ +minColorMatch[1], +minColorMatch[2], +minColorMatch[3] ]);
            maxColor = ColorManager.rgbToHsv([ +maxColorMatch[1], +maxColorMatch[2], +maxColorMatch[3] ]);
            //Return the renderer
            return function(sprite, record, attr, index, store) {
                var value = +record.get(fieldName),
                    rgb = ColorManager.hsvToRgb(interpolate(value)),
                    rgbString = 'rgb(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ')';
                return Ext.apply(attr, {
                    fill: rgbString
                });
            };
        },

        grayscale: function(fieldName, minColor, maxColor, minValue, maxValue) {
            var re = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)\s*/,
            minColorMatch = minColor.match(re),
            maxColorMatch = maxColor.match(re),
            interpolate = function(theta) {
                var ans = delta(minValue, maxValue, +minColorMatch[1], +maxColorMatch[1], theta) >> 0;
                return [ ans, ans, ans ];
            };
            //Return the renderer
            return function(sprite, record, attr, index, store) {
                var value = +record.get(fieldName),
                    rgb = interpolate(value),
                    rgbString = 'rgb(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ')';

                return Ext.apply(attr, {
                    fill: rgbString,
                    strokeFill: 'rgb(0, 0, 0)'
                });
            };
        },

        radius: function(fieldName, minRadius, maxRadius, minValue, maxValue) {
            var interpolate = function(theta) {
                return delta(minValue, maxValue, minRadius, maxRadius, theta);
            };
            //Return the renderer
            return function(sprite, record, attr, index, store) {
                var value = +record.get(fieldName),
                    radius = interpolate(value);

                return Ext.apply(attr, {
                    radius: radius,
                    size: radius
                });
            };
        }
    });
})();

//current renderer configuration
    var rendererConfiguration = {
        xField: 'data1',
        yField: 'data2',
        color: false,
        colorFrom: 'rgb(250, 20, 20)',
        colorTo: 'rgb(127, 0, 240)',
        scale: false,
        scaleFrom: 'rgb(20, 20, 20)',
        scaleTo: 'rgb(220, 220, 220)',
        radius: false,
        radiusSize: 50
    };
    //update the visualization with the new renderer configuration
    function refresh() {
        var chart = Ext.getCmp('chartCmp2'),
            series = chart.series.items,
            len = series.length,
            rc = rendererConfiguration,
            color, grayscale, radius, s;

        for(var i = 0; i < len; i++) {
            s = series[i];
            s.xField = rc.xField;
            s.yField = rc.yField;
            color = rc.color? Renderers.color(rc.color, rc.colorFrom, rc.colorTo, 0, 100) : function(a, b, attr) { return attr; };
            grayscale = rc.grayscale? Renderers.grayscale(rc.grayscale, rc.scaleFrom, rc.scaleTo, 0, 100) : function(a, b, attr) { return attr; };
            radius = rc.radius? Renderers.radius(rc.radius, 10, rc.radiusSize, 0, 100) : function(a, b, attr) { return attr; };
            s.renderer = function(sprite, record, attr, index, store) {
                return radius(sprite, record, grayscale(sprite, record, color(sprite, record, attr, index, store), index, store), index, store);
            };
        }
        chart.redraw();
    }
    //form selection callbacks/handlers.
    var xAxisHandler = function(elem) {
        var xField = elem.text;
        rendererConfiguration.xField = xField;
        refresh();
    };

    var yAxisHandler = function(elem) {
        var yField = elem.text;
        rendererConfiguration.yField = yField;
        refresh();
    };

    var colorVariableHandler = function(elem) {
        var color = elem.text;
        rendererConfiguration.color = color;
        rendererConfiguration.grayscale = false;
        refresh();
    };

    var grayscaleVariableHandler = function(elem) {
        var color = elem.text;
        rendererConfiguration.grayscale = color;
        rendererConfiguration.color = false;
        refresh();
    };

    var scaleFromHandler = function(elem) {
        var from = elem.text;
        rendererConfiguration.scaleFrom = from;
        refresh();
    };

    var scaleToHandler = function(elem) {
        var to = elem.text;
        rendererConfiguration.scaleTo = to;
        refresh();
    };

    var colorFromHandler = function(elem) {
        var from = elem.text;
        rendererConfiguration.colorFrom = from;
        refresh();
    };

    var colorToHandler = function(elem) {
        var to = elem.text;
        rendererConfiguration.colorTo = to;
        refresh();
    };

    var radiusHandler = function(elem) {
        var radius = elem.text;
        rendererConfiguration.radius = radius;
        refresh();
    };

    var radiusSizeHandler = function(elem) {
        var radius = elem.text;
        rendererConfiguration.radiusSize = parseInt(radius, 10);
        refresh();
    };

    var xAxisMenu = Ext.create('Ext.menu.Menu', {
        id: 'xAxisMenu',
        items: [ {
             text: 'data1',
             handler: xAxisHandler,
             checked: true,
             group: 'x'
           },
           {
             text: 'data2',
             handler: xAxisHandler,
               checked: false,
               group: 'x'
           },
           {
             text: 'data3',
             handler: xAxisHandler,
             checked: false,
             group: 'x'
           } ]
    });

    var yAxisMenu = Ext.create('Ext.menu.Menu', {
        id: 'yAxisMenu',
        items: [ {
            text: 'data1',
            handler: yAxisHandler,
            checked: false,
            group: 'y'
          },
          {
        text: 'data2',
            handler: yAxisHandler,
            checked: true,
            group: 'y'
          },
          {
            text: 'data3',
            handler: yAxisHandler,
            checked: false,
            group: 'y'
          } ]
    });

    var colorMenu = Ext.create('Ext.menu.Menu', {
        id: 'colorMenu',
        items: [ { text: 'data1', handler: colorVariableHandler, checked: false, group: 'color' },
                 { text: 'data2', handler: colorVariableHandler, checked: false, group: 'color' },
                 { text: 'data3', handler: colorVariableHandler, checked: false, group: 'color' },
                 { text: 'Color From',
                   menu: {
                     items: [{ text: 'rgb(250, 20, 20)', handler: colorToHandler, checked: true, group: 'colorrange' },
                             { text: 'rgb(20, 250, 20)', handler: colorToHandler, checked: false, group: 'colorrange' },
                             { text: 'rgb(20, 20, 250)', handler: colorToHandler, checked: false, group: 'colorrange' },
                             { text: 'rgb(127, 0, 240)', handler: colorFromHandler, checked: false, group: 'colorrange' },
                             { text: 'rgb(213, 70, 121)', handler: colorToHandler, checked: false, group: 'colorrange' },
                             { text: 'rgb(44, 153, 201)', handler: colorFromHandler, checked: false, group: 'colorrange' },
                             { text: 'rgb(146, 6, 157)', handler: colorFromHandler, checked: false, group: 'colorrange' },
                             { text: 'rgb(49, 149, 0)', handler: colorFromHandler, checked: false, group: 'colorrange' },
                             { text: 'rgb(249, 153, 0)', handler: colorFromHandler, checked: false, group: 'colorrange' }]
                   }
                 },
                 { text: 'Color To',
                     menu: {
                       items: [{ text: 'rgb(250, 20, 20)', handler: colorToHandler, checked: false, group: 'tocolorrange' },
                               { text: 'rgb(20, 250, 20)', handler: colorToHandler, checked: false, group: 'tocolorrange' },
                               { text: 'rgb(20, 20, 250)', handler: colorToHandler, checked: false, group: 'tocolorrange' },
                               { text: 'rgb(127, 0, 220)', handler: colorFromHandler, checked: true, group: 'tocolorrange' },
                               { text: 'rgb(213, 70, 121)', handler: colorToHandler, checked: false, group: 'tocolorrange' },
                               { text: 'rgb(44, 153, 201)', handler: colorToHandler, checked: false, group: 'tocolorrange' },
                               { text: 'rgb(146, 6, 157)' , handler: colorToHandler, checked: false, group: 'tocolorrange' },
                               { text: 'rgb(49, 149, 0)', handler: colorToHandler, checked: false, group: 'tocolorrange' },
                               { text: 'rgb(249, 153, 0)', handler: colorToHandler, checked: false, group: 'tocolorrange' }]
                     }
                   }
               ]
    });

    var grayscaleMenu = Ext.create('Ext.menu.Menu', {
        id: 'grayscaleMenu',
        items: [ { text: 'data1', handler: grayscaleVariableHandler, checked: false, group: 'gs' },
                 { text: 'data2', handler: grayscaleVariableHandler, checked: false, group: 'gs' },
                 { text: 'data3', handler: grayscaleVariableHandler, checked: false, group: 'gs' },
                 { text: 'Scale From',
                   menu: {
                     items: [{ text: 'rgb(20, 20, 20)', handler: scaleFromHandler, checked: true, group: 'gsrange' },
                             { text: 'rgb(80, 80, 80)', handler: scaleFromHandler, checked: false, group: 'gsrange' },
                             { text: 'rgb(120, 120, 120)', handler: scaleFromHandler, checked: false, group: 'gsrange' },
                             { text: 'rgb(180, 180, 180)', handler: scaleFromHandler, checked: false, group: 'gsrange' },
                             { text: 'rgb(220, 220, 220)', handler: scaleFromHandler, checked: false, group: 'gsrange' },
                             { text: 'rgb(250, 250, 250)', handler: scaleFromHandler, checked: false, group: 'gsrange' }]
                   }
                 },
                 { text: 'Scale To',
                     menu: {
                     items: [{ text: 'rgb(20, 20, 20)', handler: scaleToHandler, checked: false, group: 'togsrange' },
                             { text: 'rgb(80, 80, 80)', handler: scaleToHandler, checked: false, group: 'togsrange' },
                             { text: 'rgb(120, 120, 120)', handler: scaleToHandler, checked: false, group: 'togsrange' },
                             { text: 'rgb(180, 180, 180)', handler: scaleToHandler, checked: false, group: 'togsrange' },
                             { text: 'rgb(220, 220, 220)', handler: scaleToHandler, checked: true, group: 'togsrange' },
                             { text: 'rgb(250, 250, 250)', handler: scaleToHandler, checked: false, group: 'togsrange' }]
                     }
                   }
               ]
    });

    var radiusMenu = Ext.create('Ext.menu.Menu', {
        id: 'radiusMenu',
        style: {
            overflow: 'visible'     // For the Combo popup
        },
        items: [ { text: 'data1', handler: radiusHandler, checked: false, group: 'radius' },
                 { text: 'data2', handler: radiusHandler, checked: false, group: 'radius' },
                 { text: 'data3', handler: radiusHandler, checked: false, group: 'radius' },
                 { text: 'Max Radius',
                   menu: {
                     items: [{ text: '20', handler: radiusSizeHandler, checked: false, group: 'sradius' },
                             { text: '30', handler: radiusSizeHandler, checked: false, group: 'sradius' },
                             { text: '40', handler: radiusSizeHandler, checked: false, group: 'sradius' },
                             { text: '50', handler: radiusSizeHandler, checked: true, group: 'sradius' },
                             { text: '60', handler: radiusSizeHandler, checked: false, group: 'sradius' }]
                   }
                 }
               ]
    });
    

var storew12 = Ext.create('Ext.data.JsonStore', {
	fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data9', 'data9'],
    data: generateData()
});

win12 = Ext.create('Ext.Window', {
        width: 605,
        height: 415,
        minHeight: 400,
        minWidth: 550,
        x: 1230,
        y: 880,
        hidden: false,
        resizable:false,
        maximizable: false,
        title: 'Scatter Chart Renderer',
        //renderTo: Ext.getBody(),
        layout: 'fit',
        tbar: [
        {
        	text: 'Reload Data',
        	handler: function() {
        		storew12.loadData(generateData());
        	}
        },
        {
            text: 'Select X Axis',
            menu: xAxisMenu
        },
        {
            text: 'Select Y Axis',
            menu: yAxisMenu
        },

        {
            text: 'Select Color',
            menu: colorMenu
        },
        {
            text: 'Select Grayscale',
            menu: grayscaleMenu
        },
        {
            text: 'Select Radius',
            menu: radiusMenu
        }
        ],
        items: {
            id: 'chartCmp2',
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            store: storew12,
            axes: false,
            insetPadding: 50,
            series: [{
                type: 'scatter',
                axis: false,
                xField: 'data1',
                yField: 'data2',
                color: '#ccc',
                markerConfig: {
                    type: 'circle',
                    radius: 20,
                    size: 20
                }
            }]
        }
    });

Ext.define('Book',{
        extend: 'Ext.data.Model',
        fields: [
            // set up the fields mapping into the xml doc
            // The first needs mapping, the others are very basic
            {name: 'Author', mapping: 'ItemAttributes > Author'},
            'Title', 'Manufacturer', 'ProductGroup'
        ]
    });

    // create the Data Store
    var store13 = Ext.create('Ext.data.Store', {
        model: 'Book',
        autoLoad: true,
        proxy: {
            // load using HTTP
            type: 'ajax',
            url: 'sheldon.xml',
            // the return will be XML, so lets set up a reader
            reader: {
                type: 'xml',
                // records will have an "Item" tag
                record: 'Item',
                idProperty: 'ASIN',
                totalRecords: '@total'
            }
        }
    });
    
var grid13 = Ext.create('Ext.grid.Panel', {
        store: store13,
        columns: [
            {text: "Author", flex: 1, dataIndex: 'Author', sortable: true},
            {text: "Title", width: 180, dataIndex: 'Title', sortable: true},
            {text: "Manufacturer", width: 115, dataIndex: 'Manufacturer', sortable: true},
            {text: "Product Group", width: 100, dataIndex: 'ProductGroup', sortable: true}
        ]
    });

win13 = Ext.create('Ext.Window', {
        title: 'Amazon Book Grid',
        width: 605,
        height: 415,
        x: 1230,
        y: 460,
        resizable:false,
        layout: 'fit',
        items: [ grid13 ]
});

// wrapped in closure to prevent global vars.
    Ext.define('Restaurant', {
        extend: 'Ext.data.Model',
        fields: ['name', 'cuisine']
    });

    var Restaurants = Ext.create('Ext.data.Store', {
        storeId: 'restaraunts',
        model: 'Restaurant',
        sorters: ['cuisine','name'],
        groupField: 'cuisine',
        data: [{
            name: 'Cheesecake Factory',
            cuisine: 'American'
        },{
            name: 'University Cafe',
            cuisine: 'American'
        },{
            name: 'Slider Bar',
            cuisine: 'American'
        },{
            name: 'Shokolaat',
            cuisine: 'American'
        },{
            name: 'Gordon Biersch',
            cuisine: 'American'
        },{
            name: 'Crepevine',
            cuisine: 'American'
        },{
            name: 'Creamery',
            cuisine: 'American'
        },{
            name: 'Old Pro',
            cuisine: 'American'
        },{
            name: 'Nola\'s',
            cuisine: 'Cajun'
        },{
            name: 'House of Bagels',
            cuisine: 'Bagels'
        },{
            name: 'The Prolific Oven',
            cuisine: 'Sandwiches'
        },{
            name: 'La Strada',
            cuisine: 'Italian'
        },{
            name: 'Buca di Beppo',
            cuisine: 'Italian'
        },{
            name: 'Pasta?',
            cuisine: 'Italian'
        },{
            name: 'Madame Tam',
            cuisine: 'Asian'
        },{
            name: 'Sprout Cafe',
            cuisine: 'Salad'
        },{
            name: 'Pluto\'s',
            cuisine: 'Salad'
        },{
            name: 'Junoon',
            cuisine: 'Indian'
        },{
            name: 'Bistro Maxine',
            cuisine: 'French'
        },{
            name: 'Three Seasons',
            cuisine: 'Vietnamese'
        },{
            name: 'Sancho\'s Taquira',
            cuisine: 'Mexican'
        },{
            name: 'Reposado',
            cuisine: 'Mexican'
        },{
            name: 'Siam Royal',
            cuisine: 'Thai'
        },{
            name: 'Krung Siam',
            cuisine: 'Thai'
        },{
            name: 'Thaiphoon',
            cuisine: 'Thai'
        },{
            name: 'Tamarine',
            cuisine: 'Vietnamese'
        },{
            name: 'Joya',
            cuisine: 'Tapas'
        },{
            name: 'Jing Jing',
            cuisine: 'Chinese'
        },{
            name: 'Patxi\'s Pizza',
            cuisine: 'Pizza'
        },{
            name: 'Evvia Estiatorio',
            cuisine: 'Mediterranean'
        },{
            name: 'Cafe 220',
            cuisine: 'Mediterranean'
        },{
            name: 'Cafe Renaissance',
            cuisine: 'Mediterranean'
        },{
            name: 'Kan Zeman',
            cuisine: 'Mediterranean'
        },{
            name: 'Gyros-Gyros',
            cuisine: 'Mediterranean'
        },{
            name: 'Mango Caribbean Cafe',
            cuisine: 'Caribbean'
        },{
            name: 'Coconuts Caribbean Restaurant &amp; Bar',
            cuisine: 'Caribbean'
        },{
            name: 'Rose &amp; Crown',
            cuisine: 'English'
        },{
            name: 'Baklava',
            cuisine: 'Mediterranean'
        },{
            name: 'Mandarin Gourmet',
            cuisine: 'Chinese'
        },{
            name: 'Bangkok Cuisine',
            cuisine: 'Thai'
        },{
            name: 'Darbar Indian Cuisine',
            cuisine: 'Indian'
        },{
            name: 'Mantra',
            cuisine: 'Indian'
        },{
            name: 'Janta',
            cuisine: 'Indian'
        },{
            name: 'Hyderabad House',
            cuisine: 'Indian'
        },{
            name: 'Starbucks',
            cuisine: 'Coffee'
        },{
            name: 'Peet\'s Coffee',
            cuisine: 'Coffee'
        },{
            name: 'Coupa Cafe',
            cuisine: 'Coffee'
        },{
            name: 'Lytton Coffee Company',
            cuisine: 'Coffee'
        },{
            name: 'Il Fornaio',
            cuisine: 'Italian'
        },{
            name: 'Lavanda',
            cuisine: 'Mediterranean'
        },{
            name: 'MacArthur Park',
            cuisine: 'American'
        },{
            name: 'St Michael\'s Alley',
            cuisine: 'Californian'
        },{
            name: 'Cafe Renzo',
            cuisine: 'Italian'
        },{
            name: 'Osteria',
            cuisine: 'Italian'
        },{
            name: 'Vero',
            cuisine: 'Italian'
        },{
            name: 'Cafe Renzo',
            cuisine: 'Italian'
        },{
            name: 'Miyake',
            cuisine: 'Sushi'
        },{
            name: 'Sushi Tomo',
            cuisine: 'Sushi'
        },{
            name: 'Kanpai',
            cuisine: 'Sushi'
        },{
            name: 'Pizza My Heart',
            cuisine: 'Pizza'
        },{
            name: 'New York Pizza',
            cuisine: 'Pizza'
        },{
            name: 'California Pizza Kitchen',
            cuisine: 'Pizza'
        },{
            name: 'Round Table',
            cuisine: 'Pizza'
        },{
            name: 'Loving Hut',
            cuisine: 'Vegan'
        },{
            name: 'Garden Fresh',
            cuisine: 'Vegan'
        },{
            name: 'Cafe Epi',
            cuisine: 'French'
        },{
            name: 'Tai Pan',
            cuisine: 'Chinese'
        }]
    });
    
    var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
        groupHeaderTpl: 'Cuisine: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
    });
    
var grid14 = Ext.create('Ext.grid.Panel', {
        //renderTo: Ext.getBody(),
        collapsible: false,
        iconCls: 'icon-grid',
        //frame: true,
        store: Restaurants,
        //width: 600,
        //height: 400,
        //title: 'Restaurants',
        features: [groupingFeature],
        columns: [{
            text: 'Name',
            flex: 1,
            dataIndex: 'name'
        },{
            text: 'Cuisine',
            flex: 1,
            dataIndex: 'cuisine'
        }]
    });

win14 = Ext.create('Ext.Window', {
        title: 'Restaurants',
        width: 605,
        height: 415,
        x: 620,
        y: 985,
        resizable:false,
        layout: 'fit',
        items: [ grid14 ]
});

var widge = [win1,win2,win3,win4,win5,win6,win7,win8,win9,win10,win11,win12,win13,win14,win15,win16,win17,win18,win19,win20];

function cBtn(layout,a) {
	var pos,
		i,
		l;
	for (i = 0, l=layout.length; i < l; i++) {
		pos = layout[i];
		widge[i].updateBox({x:pos[0],y:pos[1]});
	}

};

var awesomeToolbar = Ext.create('Ext.toolbar.Toolbar', {
    height: 32,
    layout: { pack:'center' },
    items: [
        {
            xtype: 'button',
            text: 'Layout 1',
            handler: function() {
            	cBtn(l1,"l1");
            	this.ownerCt.ownerCt.ownerCt.fireEvent("layoutchanged");
            }
        },
        '-',
        {
            xtype: 'button',
            text: 'Layout 2',
            handler: function() {
            	cBtn(l2,"l2");
            	this.ownerCt.ownerCt.ownerCt.fireEvent("layoutchanged");
            }
        },
        '-',
        {
            xtype: 'button',
            text: 'Layout 3',
            handler: function() {
            	cBtn(l3,"l3");
            	this.ownerCt.ownerCt.ownerCt.fireEvent("layoutchanged");
            }
        },
        '-',
        {
            xtype: 'button',
            text: 'Layout 4',
            handler: function() {
            	cBtn(l4,"l4");
            	this.ownerCt.ownerCt.ownerCt.fireEvent("layoutchanged");
            }
        },
        '-',
        {
            xtype: 'button',
            text: 'Layout 5',
            handler: function() {
            	cBtn(l5,"l5");
            	this.ownerCt.ownerCt.ownerCt.fireEvent("layoutchanged");
            }
        },
        '-',
        {
            xtype: 'button',
            text: 'Layout 6',
            handler: function() {
            	cBtn(l6,"l6");
            	this.ownerCt.ownerCt.ownerCt.fireEvent("layoutchanged");
            }
        },
        '-',
        {
            xtype: 'button',
            text: 'Layout 7',
            handler: function() {
            	cBtn(l7,"l7");
            	this.ownerCt.ownerCt.ownerCt.fireEvent("layoutchanged");
            }
        },
        '-',
        {
            xtype: 'button',
            text: 'Layout 8',
            handler: function() {
            	cBtn(l8,"l8");
            	this.ownerCt.ownerCt.ownerCt.fireEvent("layoutchanged");
            }
        },
        '-',
        {
            xtype: 'button',
            text: 'Layout 9',
            handler: function() {
            	cBtn(l9,"l9");
            	this.ownerCt.ownerCt.ownerCt.fireEvent("layoutchanged");
            }
        },
        '-',
        {
            xtype: 'button',
            text: 'Layout 10',
            handler: function() {
            	cBtn(l10,"l10");
            	this.ownerCt.ownerCt.ownerCt.fireEvent("layoutchanged");
            }
        }
    ]
});

Ext.define('Demo.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.viewport',
    autoScroll: true,
    layout: 'anchor',
    initComponent: function() {
    	this.callParent(arguments);
    	win1.show();
    	win2.show();
    	win3.show();
    	win4.show();
    	win5.show();
    	win6.show();
    	win7.show();
    	win8.show();
    	win9.show();
    	win10.show();
    	win11.show();
    	win12.show();
    	win13.show();
    	win14.show();
    },
    listeners: {
    	layoutchanged: function() {
    		//console.log("change!");
    		store1.loadData(generateData());
    		storew8.loadData(generateData());
    		store11.loadData(generateData(6,20));
    		storew12.loadData(generateData());
    		//refresh win5 -- grouped header grid
		    for(var i=0, l=win5Data.length; i < l; i++) {
		    	var dataPoint = win5Data[i];
		    	var result = Math.round(Math.random()*Math.pow(20,2))/Math.pow(10,2);
		    	var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
		    	result = result * plusOrMinus;
		    	var perc = Math.round((result + result/2)*Math.pow(10,2))/Math.pow(10,2);
		    	
		    	dataPoint[2] = result;
		    	dataPoint[3] = perc;
		    }
		    store5.load();
		    //refresh win13 -- amazon book grid
		    store13.sort('Title');
		    //refresh win14 -- restaurants
		    Restaurants.sort('cuisine');
		    fields.sort(function() {return 0.5 - Math.random()});
		    //console.log(fields);
		    win10.items.items[0].redraw();
		    //console.log(win10.items.items[0]);
    	},
    	resize: function() {
    		this.doAutoRender();
    	}
    },
    items: [ {
    	dockedItems: [ awesomeToolbar ]
    } ]
});