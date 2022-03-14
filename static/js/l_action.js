const state = [{
        id: "US-AL",
        value: 400560925
    },
    {
        id: "US-AK",
        value: 90399550
    },
    {
        id: "US-AZ",
        value: 780688075
    },
    {
        id: "US-AR",
        value: 240573150

    },
    {
        id: "US-CA",
        value: 4806351950
    },
    {
        id: "US-CO",
        value: 727508500
    },
    {
        id: "US-CT",
        value: 547351900
    },
    {
        id: "US-DE",
        value: 96425600
    },
    {
        id: "US-FL",
        value: 2332060875
    },
    {
        id: "US-GA",
        value: 1136340900
    },
    {
        id: "US-HI",
        value: 169541025
    },
    {
        id: "US-ID",
        value: 62088425
    },
    {
        id: "US-IL",
        value: 1410059775

    },
    {
        id: "US-IN",
        value: 550766125
    },
    {
        id: "US-IA",
        value: 112800
    },
    {
        id: "US-KS",
        value: 283797100
    },
    {
        id: "US-KY",
        value: 313505100
    },
    {
        id: "US-LA",
        value: 381926975
    },
    {
        id: "US-ME",
        value: 73320525
    },
    {
        id: "US-MD",
        value: 856563300
    },
    {
        id: "US-MA",
        value: 811425700
    },
    {
        id: "US-MI",
        value: 841400600
    },
    {
        id: "US-MN",
        value: 577216150
    },
    {
        id: "US-MS",
        value: 186420300
    },
    {
        id: "US-MO",
        value: 523897300
    },
    {
        id: "US-MT",
        value: 88145950
    },
    {
        id: "US-NE",
        value: 110941450
    },
    {
        id: "US-NV",
        value: 470037000
    },
    {
        id: "US-NH",
        value: 166405750
    },
    {
        id: "US-NJ",
        value: 1315538050
    },
    {
        id: "US-NM",
        value: 178190375
    },
    {
        id: "US-NY",
        value: 2766038050
    },
    {
        id: "US-NC",
        value: 930156350
    },
    {
        id: "US-ND",
        value: 55622875
    },
    {
        id: "US-OH",
        value: 1076886475
    },
    {
        id: "US-OK",
        value: 310592850
    },
    {
        id: "US-OR",
        value: 379299300
    },
    {
        id: "US-PA",
        value: 1131593850
    },
    {
        id: "US-RI",
        value: 142880625
    },
    {
        id: "US-SC",
        value: 418337825
    },
    {
        id: "US-SD",
        value: 64657100
    },
    {
        id: "US-TN",
        value: 522309475
    },
    {
        id: "US-TX",
        value: 2930155075
    },
    {
        id: "US-UT",
        value: 227502700
    },
    {
        id: "US-VT",
        value: 68191875
    },
    {
        id: "US-VA",
        value: 1012674150
    },
    {
        id: "US-WA",
        value: 721428575
    },
    {
        id: "US-WV",
        value: 125935550
    },
    {
        id: "US-WI",
        value: 431629250
    },
    {
        id: "US-WY",
        value: 74137925
    }
]

const grade_year = [{
    "year": "2007",
    "A": 78,
    "B": 98,
    "C": 141,
    "D": 99,
    "E": 100,
    "FG": 87
}, {
    "year": "2008",
    "A": 318,
    "B": 594,
    "C": 580,
    "D": 419,
    "E": 285,
    "FG": 197
}, {
    "year": "2009",
    "A": 1203,
    "B": 1445,
    "C": 1348,
    "D": 817,
    "E": 308,
    "FG": 160
}, {
    "year": "2010",
    "A": 2830,
    "B": 3687,
    "C": 2729,
    "D": 1885,
    "E": 962,
    "FG": 444
}, {
    "year": "2011",
    "A": 5754,
    "B": 6565,
    "C": 3942,
    "D": 2796,
    "E": 1739,
    "FG": 925
}, {
    "year": "2012",
    "A": 10901,
    "B": 18507,
    "C": 11875,
    "D": 7323,
    "E": 3185,
    "FG": 1576
}, {
    "year": "2013",
    "A": 17679,
    "B": 44116,
    "C": 38134,
    "D": 20569,
    "E": 9059,
    "FG": 5257
}, {
    "year": "2014",
    "A": 36108,
    "B": 61935,
    "C": 66565,
    "D": 42992,
    "E": 20121,
    "FG": 7908
}, {
    "year": "2015",
    "A": 73336,
    "B": 117606,
    "C": 120567,
    "D": 62654,
    "E": 34948,
    "FG": 11984
}, {
    "year": "2016",
    "A": 70847,
    "B": 134512,
    "C": 132178,
    "D": 59178,
    "E": 25807,
    "FG": 11885
}, {
    "year": "2017",
    "A": 78796,
    "B": 133127,
    "C": 145144,
    "D": 56646,
    "E": 20167,
    "FG": 9699
}, {
    "year": "2018",
    "A": 135177,
    "B": 141365,
    "C": 126850,
    "D": 69046,
    "E": 18958,
    "FG": 3846
}]

const loan_status = [{
        country: "Chargedoff",
        value: 262416
    },
    {
        country: "Current",
        value: 919695
    },
    {
        country: "FullyPaid",
        value: 1041952
    },
    {
        country: "GracePeriod",
        value: 8952
    },
    {
        country: "Late",
        value: 25665
    }
]

const delinquency = [{
        category: "under 6 M",
        value1: 47780,
    },
    {
        category: "6~12 M",
        value1: 66896,
    },
    {
        category: "13~24 M",
        value1: 98028,
    },
    {
        category: "25~36 M",
        value1: 41523,
    },
    {
        category: "37~48 M",
        value1: 6157,
    },
    {
        category: "49~60 M",
        value1: 1268,
    },
]

state_chart()
grade_year_chart()
loan_status_chart()
delinquency_chart()

// console.log(document.body.clientHeight)
console.log(document.documentElement.scrollTop)
let bodyTop = window.pageYOffset;

function state_chart() {
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create map instance
        var chart = am4core.create("us-state-chart", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_usaLow;

        // Set projection
        chart.projection = new am4maps.projections.AlbersUsa();

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        //Set min/max fill color for each area
        polygonSeries.heatRules.push({
            property: "fill",
            target: polygonSeries.mapPolygons.template,
            min: chart.colors.getIndex(1).brighten(1),
            max: chart.colors.getIndex(1).brighten(-0.3)
        });

        // Make map load polygon data (state shapes and names) from GeoJSON
        polygonSeries.useGeodata = true;

        // Set heatmap values for each state
        polygonSeries.data = state;

        // Set up heat legend
        let heatLegend = chart.createChild(am4maps.HeatLegend);
        heatLegend.series = polygonSeries;
        heatLegend.align = "right";
        heatLegend.valign = "bottom";
        heatLegend.width = am4core.percent(15);
        heatLegend.marginRight = am4core.percent(4);
        heatLegend.minValue = 112800;
        heatLegend.maxValue = 500000000;

        // Set up custom heat map legend labels using axis ranges
        var minRange = heatLegend.valueAxis.axisRanges.create();
        minRange.value = heatLegend.minValue;
        minRange.label.text = "Little";
        var maxRange = heatLegend.valueAxis.axisRanges.create();
        maxRange.value = heatLegend.maxValue;
        maxRange.label.text = "A lot!";

        // Blank out internal heat legend value axis labels
        heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
            return "";
        });

        // Configure series tooltip
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}: {value}";
        polygonTemplate.nonScalingStroke = true;
        polygonTemplate.strokeWidth = 0.5;

        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#3c5bdc");

    }); // end am4core.ready()
}

function grade_year_chart() {
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_dataviz);
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("grade-year-chart", am4charts.XYChart);


        // Add data
        chart.data = grade_year;

        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.grid.template.location = 0;


        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inside = true;
        valueAxis.renderer.labels.template.disabled = true;
        valueAxis.min = 0;

        // Create series
        function createSeries(field, name) {

            // Set up series
            var series = chart.series.push(new am4charts.ColumnSeries());
            series.name = name;
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "year";
            series.sequencedInterpolation = true;

            // Make it stacked
            series.stacked = true;

            // Configure columns
            series.columns.template.width = am4core.percent(70);
            series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:12px]{categoryX}: {valueY}";

            // Add label
            var labelBullet = series.bullets.push(new am4charts.LabelBullet());

            labelBullet.locationY = 0.4;
            labelBullet.label.hideOversized = true;

            return series;
        }

        createSeries("A", "A");
        createSeries("B", "B");
        createSeries("C", "C");
        createSeries("D", "D");
        createSeries("E", "E");
        createSeries("F", "F");
        createSeries("G", "G");

        // Legend
        chart.legend = new am4charts.Legend();

    });
}

function loan_status_chart() {
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_frozen);
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart
        var chart = am4core.create("loan-status-chart", am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = loan_status;

        var series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "value";
        series.dataFields.radiusValue = "value";
        series.dataFields.category = "country";
        series.slices.template.cornerRadius = 6;
        series.colors.step = 3;

        series.hiddenState.properties.endAngle = -90;

        chart.legend = new am4charts.Legend();

    });
}

function delinquency_chart() {
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_kelly);
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("delinquency-chart", am4charts.RadarChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = delinquency;

        chart.padding(20, 20, 20, 20);

        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.labels.template.location = 0.5;
        categoryAxis.renderer.tooltipLocation = 0.5;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.labels.template.horizontalCenter = "left";
        valueAxis.min = 0;

        var series1 = chart.series.push(new am4charts.RadarColumnSeries());
        series1.columns.template.tooltipText = "{name}: {valueY.value}";
        series1.columns.template.width = am4core.percent(80);
        series1.name = "Series 1";
        series1.dataFields.categoryX = "category";
        series1.dataFields.valueY = "value1";
        series1.stacked = true;

        var series2 = chart.series.push(new am4charts.RadarColumnSeries());
        series2.columns.template.width = am4core.percent(80);
        series2.columns.template.tooltipText = "{name}: {valueY.value}";
        series2.name = "Series 2";
        series2.dataFields.categoryX = "category";
        series2.dataFields.valueY = "value2";
        series2.stacked = true;

        var series3 = chart.series.push(new am4charts.RadarColumnSeries());
        series3.columns.template.width = am4core.percent(80);
        series3.columns.template.tooltipText = "{name}: {valueY.value}";
        series3.name = "Series 3";
        series3.dataFields.categoryX = "category";
        series3.dataFields.valueY = "value3";
        series3.stacked = true;

        var series4 = chart.series.push(new am4charts.RadarColumnSeries());
        series4.columns.template.width = am4core.percent(80);
        series4.columns.template.tooltipText = "{name}: {valueY.value}";
        series4.name = "Series 4";
        series4.dataFields.categoryX = "category";
        series4.dataFields.valueY = "value4";
        series4.stacked = true;

        chart.seriesContainer.zIndex = -1;

        chart.scrollbarX = new am4core.Scrollbar();
        chart.scrollbarX.exportable = false;
        chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarY.exportable = false;

        chart.cursor = new am4charts.RadarCursor();
        chart.cursor.xAxis = categoryAxis;
        chart.cursor.fullWidthXLine = true;
        chart.cursor.lineX.strokeOpacity = 0;
        chart.cursor.lineX.fillOpacity = 0.1;
        chart.cursor.lineX.fill = am4core.color("#000000");

    });

}