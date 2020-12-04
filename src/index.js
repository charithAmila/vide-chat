import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  isMobile
} from "react-device-detect";
import { 
  ImPhoneHangUp, 
  ImMic,
  ImVideoCamera, 
  ImLoop2, 
  ImPhone 
} from 'react-icons/im';
import Modal from 'react-modal';
import styles from './styles.css'
import { ANSWERED, CALLING, customStyles, NO } from './constant';

export default class VideoChat extends Component {
  constructor(props){
    super(props);
    this.state= {
      status: NO
    }
  }
  
  render() {
    const {
      button,
    } = this.props
    const { children, onClick: afterConnect, ...rest } = button

    const { status } = this.state;

    if(status === NO){
      return (
        <button onClick={()=> this.setState({status: CALLING},()=>{
          setTimeout(()=>{
            this.setState({status: ANSWERED})
          },4000)
        }) }>
          {children}
        </button>
      )
    }
    

    return (
      <Modal
          isOpen={true}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className={!isMobile? styles.container: styles.container_mobile}>
          { status === ANSWERED  &&   
            <div className={styles.remote_wrapper}>
              <div className={styles.remote}>
                {isMobile && <div className={styles.switch_camara_wrapper}>
                  <ImLoop2 onClick={()=> alert('Hello')} />
                </div>}
              </div>
            </div>
          }
          { status === CALLING &&
          <div className={styles.calling_wrapper}>
              <div className={styles.calling_box_element}>
                <ImPhone />
              </div>
          </div>
          }
          <div className={styles.toolbar}>
            {status === ANSWERED &&
              <div className={styles.button_wrapper}>
                <button className={styles.control_button_active}>
                  <ImMic />
                </button>
              </div>
            }
            <div className={styles.button_wrapper}>
              <button onClick={()=> this.setState({status:NO})} className={styles.call_disconnect_button}><ImPhoneHangUp /></button>
            </div>
            {
              status === ANSWERED &&
              <div className={styles.button_wrapper}>
                <button className={styles.control_button}>
                  <ImVideoCamera className={styles.calling_icon} />
                </button>
              </div>
            }
          </div>
        </div>
        </Modal>
      
    )
  }

  static propTypes = {
    text: PropTypes.string
  }
}
