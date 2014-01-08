'use strict';

/* Schedule Filters */

var cjsrScheduleFilters = angular.module('cjsrFilters', []);

/* 
  formatDay would be good to generalize so it needs a Days object to format 
  off of. That way it could take custom days rather than just moday - sunday 
*/
cjsrScheduleFilters.filter('formatDay', function() {
	return function(dayAbbr) {
		switch(dayAbbr) {
			case 'sun':
				return 'Sunday';
				break;
			case 'mon':
				return 'Monday';
			case 'tues':
				return 'Tuesday';
			case 'wed':
				return 'Wednesday';
			case 'thurs':
				return 'Thursday';
			case 'fri':
				return 'Friday';
			case 'sat':
				return 'Saturday';
			default:
				return 'formatDay Error';
		}
	}
});

cjsrScheduleFilters.filter('formatTimeString', function() {
	return function(timeInt) {
		var timeString = "", hourInt;
    ((timeInt%100 == 0) ? 
      (hourInt=timeInt/100) : 
      (hourInt=(timeInt-30)/100));

    if (timeInt > 1200) {
      hourInt -= 12;
    };
    switch(timeInt) {
      case(0):
        timeString = "Midnight";
        break;
      case(1200):
        timeString = "Noon";
        break;
      case(2400):
        timeString = "Midnight";
        break;
      default:
        if ((timeInt%100) == 0) {
          timeString = hourInt + ":00";
        } else {
          timeString = hourInt + ":" + (timeInt%100);
        };

        if (timeInt < 1200) {
          timeString += " AM";
        } else{
          timeString += " PM";
        };
        break;
    };
    return timeString;
	}
});

cjsrScheduleFilters.filter('sortShows', function() {
  return function(showsToSort) {
    
  }
});

/* It would be good to have sorting filters in here. 
  This should be the place for those. 

  Best would be to have days (it would be good to have custom days)
  then add the shows where show.day==day to the day.
  Then sort those shows for that day?
  The sorting algorithm should successfully sort any combination of shows.

  There will still be complications later for when the displayed daytime starts.
  Currently the displayed start is 6am (not midnight) which complicates things somewhat.
  
*/

