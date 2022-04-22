import React from 'react'
import {Modal} from 'react-native'
import ChatWindow from './ChatWindow'
import { useInternalState } from '../contexts/InternalStateProvider'
import BotIcon from './BotIcon'

export default function Bot(){
    const {isModalOpen} = useInternalState()
    return (
    <>
        <Modal visible={true}>
          <ChatWindow />
        </Modal>
        
        {!isModalOpen && <BotIcon/>}
    </>
    )
}