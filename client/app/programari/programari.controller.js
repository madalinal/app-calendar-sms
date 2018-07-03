'use strict';

angular.module('appCalendarSms2App')
  .controller('ProgramariCtrl', function($scope) {

    var moviesData = [
      {
        id: 1,
        text: "His Girl Friday",
        director: "Howard Hawks",
        year: 1940,
        image: "images/movies/HisGirlFriday.jpg",
        duration: 30,
        color: "#cb6bb2"
      }, {
        id: 2,
        text: "Royal Wedding",
        director: "Stanley Donen",
        year: 1951,
        image: "images/movies/RoyalWedding.jpg",
        duration: 30,
        color: "#56ca85"
      }];

    var theatreData = [{
      text: "Frizer 1",
      id: 0
    }, {
      text: "Frizer 2",
      id: 1
    }, {
      text: "Frizer 3",
      id: 2
    }
    ];

    var today = new Date();

    var data = [{
      theatreId: 0,
      movieId: 1,
      price: 10,
      startDate: new Date().setHours(9),
      endDate: new Date().setHours(9,30)
    }, {
      theatreId: 0,
      movieId: 1,
      price: 5,
      startDate: new Date().setHours(9,30),
      endDate: new Date().setHours(10)
    }, {
      theatreId: 1,
      movieId: 1,
      price: 15,
      startDate: new Date().setHours(9),
      endDate: new Date().setHours(9,30)
    }
    ];

    $scope.options = {
      dataSource: data,
      views: ["day", "week", "timelineDay"],
      currentView: "day",
      currentDate: new Date(),
      firstDayOfWeek: 0,
      startDayHour: 9,
      endDayHour: 23,
      showAllDayPanel: false,
      height: 600,
      groups: ["theatreId"],
      crossScrollingEnabled: true,
      cellDuration: 30,
      editing: {
        allowAdding: true
      },
      resources: [{
        fieldExpr: "theatreId",
        dataSource: theatreData
      }],
      appointmentTooltipTemplate: "tooltip-template",
      appointmentTemplate: "appointment-template",
      onAppointmentFormCreated: function(data) {
        var form = data.form,
          movieInfo = getMovieById(data.appointmentData.movieId) || {},
          startDate = data.appointmentData.startDate;

        console.log(data);

        form.option("items", [ {
          name: "director",
          editorType: "dxTextBox",
          editorOptions: {
            value: theatreData[data.appointmentData.theatreId].text,
            readOnly: true,
            disabled: true
          }
        }, {
          dataField: "startDate",
          editorType: "dxDateBox",
          editorOptions: {
            width: "100%",
            type: "datetime",
            onValueChanged: function(args) {
              startDate = args.value;
              form.getEditor("endDate")
                .option("value", new Date (startDate.getTime() +
                  60 * 1000 * movieInfo.duration));
            }
          }
        }, {
          name: "endDate",
          dataField: "endDate",
          editorType: "dxDateBox",
          editorOptions: {
            width: "100%",
            type: "datetime",
            readOnly: true
          }
        }, {
          dataField: "price",
          editorType: "dxRadioGroup",
          editorOptions: {
            dataSource: [5, 10, 15, 20],
            itemTemplate: function(itemData) {
              return "$" + itemData;
            }
          }
        }
        ]);
      }
    };

    $scope.getMovieById = getMovieById;
    $scope.editDetails = function (showtime) {
      $('#scheduler').dxScheduler('instance').showAppointmentPopup(getDataObj(showtime), false);
    };

    function getDataObj(objData) {
      var result;
      for(var i = 0; i < data.length; i++) {
        if(data[i].startDate.getTime() === objData.startDate.getTime() && data[i].theatreId === objData.theatreId) {
          result = data[i];
          break;
        }
      }
      return result;
    }

    function getMovieById(id) {
      return DevExpress.data.query(moviesData)
        .filter("id", id)
        .toArray()[0];
    }

  });
