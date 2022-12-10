import React from 'react';
import Classes from './ScreenHeading.module.css';

function ScreenHeading(props) {
    return (
        <div className={Classes['heading-container']}>
            <div className={Classes['screen-heading']}>
                <span>{props.title}</span>
            </div>

            {
                (props.subHeading) ? (
                    <div className={Classes['screen-sub-heading']}>
                        <span>{props.subHeading}</span>
                    </div>
                ) : (<div />)
            }
            <div className={Classes['heading-separator']}>
                <div className={Classes['separator-line']}>
                    <div className={Classes['separator-blob']}>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenHeading;