import './index.js';
import * as React from 'react';
import { Day, WorkWeek, Week, Month, ScheduleComponent, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective, Inject, TimelineViews, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { SampleBase } from '../../sample.base';
import dataSource from '../../datasource.json';
import { extend } from '@syncfusion/ej2-base';
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import { setCulture } from '@syncfusion/ej2-base';
import * as localeTexts from '../../locale.json';

loadCldr(
require('cldr-data/supplemental/numberingSystems.json'),
require('cldr-data/main/pt-PT/ca-gregorian.json'),
require('cldr-data/main/pt-PT/numbers.json'),
require('cldr-data/main/pt-PT/timeZoneNames.json')
);

setCulture('pt-PT');
L10n.load(localeTexts);

export class GroupEditing extends SampleBase {
    data = extend([], dataSource.resourceConferenceData, null, true);
    resourceData = [
        { Text: 'Margaret', Id: 1, Color: '#fff000' },
        { Text: 'Robert', Id: 2, Color: '#357cd2' },
        { Text: 'Laura', Id: 3, Color: '#7fa900' }
    ];

    

    getEmployeeName(value) {
        return ((value.resourceData) ?
            value.resourceData[value.resource.textField] : value.resourceName);
    }
    getEmployeeDesignation(value) {
        let resourceName = this.getEmployeeName(value);
        return (resourceName === 'Margaret') ? 'Sales Representative' : (resourceName === 'Robert') ?
            'Vice President, Sales' : 'Inside Sales Coordinator';
    }
    monthEventTemplate(props) {
        return (<div className="subject">{props.Subject}</div>);
    }
    resourceHeaderTemplate(props) {
        return (<div className="template-wrap">
                  <div className="resource-details">
                    <div className="resource-name">{this.getEmployeeName(props)}</div>
                    <div className="resource-designation">{this.getEmployeeDesignation(props)}</div>
                </div>
              </div>);
    }
    render() {
        return (
        <div className='schedule-control-section'>
        <div className='col-lg-12 control-section'>
          <div className='control-wrapper'>
            <ScheduleComponent 
              cssClass='group-editing' 
              width='100%'
              height='500px'
              locale='pt-PT'
              selectedDate={new Date(2021, 5, 5)}
              startHour='08:00' endHour='17:00'
              workHours={{
                highlight: true, start: '12:00', end: '13:00'
              }}
              currentView='WorkWeek'
              resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)}
              eventSettings={{
                dataSource: this.data,
                fields: {
                    subject: { title: 'Conference Name', name: 'Subject' },
                    description: { title: 'Summary', name: 'Description' },
                    startTime: { title: 'From', name: 'StartTime' },
                    endTime: { title: 'To', name: 'EndTime' }
                }
              }}
              allowMultiRowSelection= 'true'
              enableAdaptiveUI='true'
              group={{ allowGroupEdit: true
                , enableCompactView: true
                , resources: ['Conferences'] 
              }}>
              <ResourcesDirective>
                <ResourceDirective 
                  field='ConferenceId' 
                  title='Attendees' 
                  name='Conferences'
                  allowMultiple={true} 
                  dataSource={this.resourceData}
                  textField='Text' 
                  idField='Id' 
                  colorField='Color'>
                </ResourceDirective>
              </ResourcesDirective>
              <ViewsDirective>
                <ViewDirective option='Day'/>
                <ViewDirective option='Week'/>
                <ViewDirective option='WorkWeek'/>
                <ViewDirective option='Month'/>
                <ViewDirective option='TimelineViews'/>
              </ViewsDirective>
              <Inject services={[Day, WorkWeek, Week, Month, TimelineViews, Resize, DragAndDrop]}/>
            </ScheduleComponent>
          </div>
        </div>
      </div>);
    }
}

export default GroupEditing;