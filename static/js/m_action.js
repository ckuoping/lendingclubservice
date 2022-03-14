// 靜態資料來源
const grade = [{
        "grade": "A",
        "score": 0.035
    },
    {
        "grade": "B",
        "score": 0.084
    },
    {
        "grade": "C",
        "score": 0.145
    },
    {
        "grade": "D",
        "score": 0.205
    },
    {
        "grade": "E",
        "score": 0.268
    },
    {
        "grade": "F",
        "score": 0.352
    },
    {
        "grade": "G",
        "score": 0.428
    }
]

const relation = [
    { from: "Grade", to: "Loan Status", value: 0.034 },
    { from: "Disbursement Method", to: "Loan Status", value: 0.033 },
    { from: "Interest Rate", to: "Loan Status", value: 0.028 },
    { from: "Consumption to credit limit", to: "Loan Status", value: 0.014 },
    { from: "Debt of Revolving Accounts", to: "Loan Status", value: 0.012 },
    { from: "Available Revolving Balance", to: "Loan Status", value: 0.011 },
    { from: "Term", to: "Loan Status", value: 0.01 }, { from: "Purpose", to: "Loan Status", value: 0.005 }

];

const purpose = [{
    "purpose": "education",
    "ratio": 0.25
}, {
    "purpose": "business",
    "ratio": 0.196
}, {
    "purpose": "wedding",
    "ratio": 0.184
}, {
    "purpose": "moving",
    "ratio": 0.149
}, {
    "purpose": "vacation",
    "ratio": 0.146
}, {
    "purpose": "debt consolidation",
    "ratio": 0.138
}, {
    "purpose": "medical",
    "ratio": 0.132
}, {
    "purpose": "other",
    "ratio": 0.123
}, {
    "purpose": "house",
    "ratio": 0.12
}, {
    "purpose": "major purchase",
    "ratio": 0.119
}, {
    "purpose": "home improvement",
    "ratio": 0.116
}, {
    "purpose": "car",
    "ratio": 0.115
}, {
    "purpose": "energy",
    "ratio": 0.105
}, {
    "purpose": "credit card",
    "ratio": 0.102
}];

grade_chart()
disbursement_chart()
purpose_chart()
term_chart()
ownership_chart()
verification_chart()
relation_chart()


// 各種動態圖表呈現
function grade_chart() {
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_dataviz);
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("grade-chart", am4charts.PieChart);

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "score";
        pieSeries.dataFields.category = "grade";

        // Let's cut a hole in our Pie chart the size of 30% the radius
        chart.innerRadius = am4core.percent(25);

        // Put a thick white border around each Slice
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.slices.template
            // change the cursor on hover to make it apparent the object can be interacted with
            .cursorOverStyle = [{
                "property": "cursor",
                "value": "pointer"
            }];

        pieSeries.alignLabels = false;
        pieSeries.labels.template.bent = true;
        pieSeries.labels.template.radius = 30;
        pieSeries.labels.template.padding(0, 0, 0, 0);

        pieSeries.ticks.template.disabled = true;

        // Create a base filter effect (as if it's not there) for the hover to return to
        var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
        shadow.opacity = 0;

        // Create hover state
        var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

        // Slightly shift the shadow and make it more prominent on hover
        var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
        hoverShadow.opacity = 0.7;
        hoverShadow.blur = 5;

        // Add a legend
        // chart.legend = new am4charts.Legend();
        // chart.dataSource.url = "grade.json";

        chart.data = grade


    });
}

function disbursement_chart() {
    var ctxP = document.getElementById("pie-chart").getContext('2d');
    var myPieChart = new Chart(ctxP, {
        plugins: [ChartDataLabels],
        type: 'pie',
        data: {
            labels: ["Transfer Payment", "Cash"],
            datasets: [{
                data: [30, 70],
                backgroundColor: ["#46BFBD", "#4D5360"],
                hoverBackgroundColor: ["#5AD3D1", "#616774"]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: 'top',
                labels: {
                    padding: 20,
                    boxWidth: 10
                }
            },
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        return percentage;
                    },
                    color: 'white',
                    labels: {
                        title: {
                            font: {
                                size: '16'
                            }
                        }
                    }
                }
            }
        }

    });
}

function relation_chart() {
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_frozen);
        am4core.useTheme(am4themes_animated);
        // Themes end

        var chart = am4core.create("relation-chart", am4charts.ChordDiagram);
        chart.hiddenState.properties.opacity = 0;

        // chart.data = relation;
        chart.data = relation;

        chart.dataFields.fromName = "from";
        chart.dataFields.toName = "to";
        chart.dataFields.value = "value";

        chart.legend = new am4charts.Legend();
        // make nodes draggable
        var nodeTemplate = chart.nodes.template;
        nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
        nodeTemplate.showSystemTooltip = true;
        nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer

    });
}

function term_chart() {
    var yAxis = ["term"];
    // 資料集合，之後只要更新這個就好了。
    // 因為兩組資料，所以規劃成datas1 ,datas2 
    var datas1 = [61.8, 5];
    var datas2 = [38.2, 5];
    var ctx = document.getElementById('term-chart').getContext('2d');
    var lineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: yAxis,
            datasets: [{
                    label: '60 months',
                    data: datas1,
                    backgroundColor: "rgba(54, 162, 235, 0.5)"
                },
                {
                    label: '36 months',
                    data: datas2,
                    backgroundColor: "rgba(201, 203, 207, 0.2)"
                },
            ]
        },
        options: {
            maintainAspectRatio: false
        }
    });
}

function ownership_chart() {
    var yAxis = ["Home"];
    // 資料集合，之後只要更新這個就好了。
    // 因為兩組資料，所以規劃成datas1 ,datas2 
    var datas1 = [29.8, 5];
    var datas2 = [26.2, 5];
    var datas3 = [23.1, 5];
    var datas4 = [20.9, 5];
    var ctx = document.getElementById('ownership-chart').getContext('2d');
    var lineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: yAxis,
            datasets: [{
                    label: 'Rent',
                    data: datas1,
                    backgroundColor: "rgba(75, 220, 192, 0.5)"
                },
                {
                    label: 'Own',
                    data: datas2,
                    backgroundColor: "rgba(255, 99, 132, 0.2)"
                },
                {
                    label: 'Mortgage',
                    data: datas3,
                    backgroundColor: "rgba(153, 102, 255, 0.2)"
                },
                {
                    label: 'Other',
                    data: datas4,
                    backgroundColor: "rgba(201, 203, 207, 0.2)"
                }
            ]
        },
        options: {
            maintainAspectRatio: false
        }
    });
}

function verification_chart() {
    var yAxis = ["verification"];
    // 資料集合，之後只要更新這個就好了。
    // 因為兩組資料，所以規劃成datas1 ,datas2 
    var datas1 = [62.8, 5];
    var datas2 = [37.2, 5];
    var ctx = document.getElementById('verification-chart').getContext('2d');
    var lineChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: yAxis,
            datasets: [{
                    label: 'Verified',
                    data: datas1,
                    backgroundColor: "rgba(255, 206, 86, 0.5)"
                },
                {
                    label: 'Not Verified',
                    data: datas2,
                    backgroundColor: "rgba(201, 203, 207, 0.2)"
                },
            ]
        },
        options: {
            maintainAspectRatio: false
        }
    });
}

function purpose_chart() {
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_spiritedaway);
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create("purpose-chart", am4charts.XYChart);
        chart.scrollbarX = new am4core.Scrollbar();

        // Add data
        chart.data = purpose


        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "purpose";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.tooltip.disabled = true;
        categoryAxis.renderer.minHeight = 110;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 50;

        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "ratio";
        series.dataFields.categoryX = "purpose";
        series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series.columns.template.strokeWidth = 0;

        series.tooltip.pointerOrientation = "vertical";

        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;

        // on hover, make corner radiuses bigger
        var hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;

        series.columns.template.adapter.add("fill", function(fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });

        // Cursor
        chart.cursor = new am4charts.XYCursor();

    });
}