import React from 'react';
import {Button, ComboBox} from 'carbon-components-react';

//copy Button from http://react.carbondesignsystem.com/?path=/story/buttons--default
export function CarbonComp() {
    return (
        <div>
            <h3>React Carbon Design</h3>
              <Button
                className="some-class"
                disabled={false}
                iconDescription="Button icon"
                kind="primary"
                onClick={function noRefCheck(){}}
                onFocus={function noRefCheck(){}}
                renderIcon={undefined}
                size="default"
                tabIndex={0}
                type="button"
            >
                Hello
            </Button>
            
            <div>
            <ComboBox
                ariaLabel="Choose an item"
                disabled={false}
                helperText="Optional helper text here"
                id="carbon-combobox-example"
                invalidText="A valid value is required"
                itemToString={item => (item ? item.text : " ")}
                items={[
                {
                    id: 'option-0',
                    text: 'Option 1'
                },
                {
                    id: 'option-1',
                    text: 'Option 2'
                },
                {
                    id: 'option-2',
                    selected: true,
                    text: 'Option 3'
                },
                {
                    id: 'option-3',
                    text: 'Option 4'
                },
                {
                    id: 'option-4',
                    text: 'An example option that is really long to show what should be done to handle long text'
                }
                ]}
                placeholder="Filter..."
                titleText="My Combobox title"
                type="default"
            />
            </div>
        </div>
    )
}