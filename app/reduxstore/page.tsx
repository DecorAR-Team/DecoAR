'use client';

import React from 'react'
import { decrement, increment } from '@/store/slices/counterSlice';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux'


export default function Store() {

  const count = useSelector((state: RootState) => state.counter.value)
  const user = useSelector((state: RootState) => state.user.username)
  const dispatch = useDispatch()


  return (
    <div>
      <div>
        <h1> {user} </h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span> {count} </span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

      </div>
    </div>
  )
}
