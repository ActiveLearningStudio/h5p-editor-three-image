import React from 'react';
import PropTypes from 'prop-types';
import './EditingDialog.scss';

const EditingDialog = (props) => {
  const titleClasses = [
    'title',
    ...props.titleClasses || [],
  ];

  return (
    <div className='h5p-editing-overlay'>
      <div className='h5p-editing-dialog'>
        <div className='h5p-editing-dialog-header'>
          <div className={titleClasses.join(' ')}
          >{props.title || ''}</div>
          <div className='h5p-editing-dialog-button-row'>
            <button
              className='remove-button'
              onClick={props.removeAction.bind(this)}
            >{props.remove}</button>
            <button
              className='done-button'
              onClick={props.doneAction.bind(this)}
            >{props.done}</button>
          </div>
        </div>
        <div className='h5p-editing-dialog-body'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

EditingDialog.propTypes = {
  titleClasses: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  removeAction: PropTypes.func.isRequired,
  doneAction: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default EditingDialog;