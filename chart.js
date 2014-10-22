var data
var year = [];
var school = [];
var male = [];
var female = [];
var total = [];
var maleAid = [];
var femaleAid = [];
var coedAid = [];
var maleAthletes = [];
var femaleAthletes = [];
var totalMaleAid = [];
var totalFemaleAid = [];
var totalCoedAid = [];
var maleExpenses = [];
var femaleExpenses = [];
var coedExpenses = [];

$( document ).ready(function() {
    loadData();
});


function loadData(){
    
    $.ajax({
            type:"GET",
            url:"aid.json",
            dataType:"text",
            success: parseData
});
    
   
}


function parseData(data){
    //console.log(data);
    
    dataObj = $.parseJSON(data);
    //console.log(dataObj);
     
     for (var i = 0, len = dataObj.length; i < len; ++i) {
            //sets data to arrays for charts
            year.push(dataObj[i]["year"]);
            school.push(dataObj[i]["school"]);
            male.push(dataObj[i]["male"]);
            female.push(dataObj[i]["female"]);
            femaleAid.push(dataObj[i]["femaleAid"]);
            maleAid.push(dataObj[i]["maleAid"]);
            coedAid.push(dataObj[i]["coedAid"]);
            maleAthletes.push(dataObj[i]["maleAthletes"]);
            femaleAthletes.push(dataObj[i]["femaleAthletes"]);
            totalMaleAid.push(dataObj[i]["totalMaleAid"]);
            totalFemaleAid.push(dataObj[i]["totalFemaleAid"]);
            totalCoedAid.push(dataObj[i]["totalCoedAid"]);
            maleExpenses.push(dataObj[i]["maleExpenses"]);
            femaleExpenses.push(dataObj[i]["femaleExpenses"]);
            coedExpenses.push(dataObj[i]["coedExpenses"]);
            
     }
     
    console.log(school);
    generateChart()
    generateChart2()
    generateChart3()
    generateChart4()
}


    

function generateChart2(){
    $('#container').highcharts({
        chart: {
            type: 'column',
            style: {
            fontFamily: 'franklin'
            }
        },
        title: {
            text: 'NC Div I Athletic Student Aid (2012)',
            style: {
            fontWeight: 'bold',
            fontFamily: 'franklincondensed'
            }
        },
        subtitle: {
            text: 'Source: http://ope.ed.gov/athletics/'
        },
        xAxis: {
            categories: school
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Student Aid ($)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>${point.y:,.2f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Male',
            color: '#1e6388',
            data: maleAid

        }, {
            name: 'Female',
            color: '#84a0b7',
            data: femaleAid

        }, {
            name: 'Coed',
            color: '#bac7d3',
            data: coedAid

        },]
    });
};

$(function () {
    Highcharts.setOptions({
     colors: ['#1e6388', '#84a0b7', '#bac7d3',]
    });
    $('#container2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false,
            style: {
            fontFamily: 'franklin'
            }
        },
        title: {
            text: 'Breakdown of Aid Statewide (2008-2012)',
            style: {
            fontWeight: 'bold',
            fontFamily: 'franklincondensed'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>${point.y:,.2f}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f}%',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Scholarships',
            data: [
                
                ['Male',   138538649],
                ['Female',       95951782],
                ['Co-ed', 286614],
                
            ]
        }]
    });
});

function generateChart(){
    $('#container3').highcharts({
        chart: {
            type: 'column',
            style: {
            fontFamily: 'franklin'
            }
        },
        title: {
            text: 'NC Div I Athletic Participation (2012)',
            style: {
            fontWeight: 'bold',
            fontFamily: 'franklincondensed'
            }
        },
        subtitle: {
            text: 'Source: http://ope.ed.gov/athletics/'
        },
        xAxis: {
            categories: school
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Athletes'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:,.0f} Athletes</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Male',
            color: '#1e6388',
            data: maleAthletes

        }, {
            name: 'Female',
            color: '#84a0b7',
            data: femaleAthletes

        },]
    });
};

function generateChart3(){
    $('#container4').highcharts({
        chart: {
            type: 'column',
            style: {
            fontFamily: 'franklin'
            }
        },
        title: {
            text: 'NC Div I Athletic Student Aid Total',
            style: {
            fontWeight: 'bold',
            fontFamily: 'franklincondensed'
            }
        },
        subtitle: {
            text: 'Data from Duke, NC State, UNC, ECU, and Wake. Source: http://ope.ed.gov/athletics/'
        },
        xAxis: {
            categories: year,
            title: {
                text: 'Year'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Aid Given'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>${point.y:,.2f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Male',
            color: '#1e6388',
            data: totalMaleAid

        }, {
            name: 'Female',
            color: '#84a0b7',
            data: totalFemaleAid

        },
        {
            name: 'Co-ed',
            color: '#bac7d3',
            data: totalCoedAid

        },]
    });
};

function generateChart4(){
    $('#container5').highcharts({
        chart: {
            type: 'column',
            style: {
            fontFamily: 'franklin'
            }
        },
        title: {
            text: 'NC Div I Athletic Expenses (2012)',
            style: {
            fontWeight: 'bold',
            fontFamily: 'franklincondensed'
            }
        },
        subtitle: {
            text: 'Source: http://ope.ed.gov/athletics/'
        },
        xAxis: {
            categories: school
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Spent on Athletics'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>${point.y:,.2f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Male',
            color: '#1e6388',
            data: maleExpenses

        }, {
            name: 'Female',
            color: '#84a0b7',
            data: femaleExpenses

        },
        {
            name: 'Co-ed',
            color: '#bac7d3',
            data: coedExpenses

        },]
    });
};
