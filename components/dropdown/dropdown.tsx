import React, { useState, useEffect } from 'react'
import DropdownWrapper from './dropdown.style'

type DropdownProps = {
  className?: string
  handler: React.ReactNode
  content: React.ReactNode
  direction?: 'left' | 'right'
  handleToggle?: () => void
  handlerWidth?: any
  handlerHeight?: any
}

const Dropdown: React.FC<DropdownProps> = ({
  className,
  handler,
  content,
  direction,
  handlerWidth = 24,
  handlerHeight = 24
}) => {
  const [state, setState] = useState(false)

  const addAllClasses: string[] = ['dropdown-wrapper']

  if (className) {
    addAllClasses.push(className)
  }

  if (direction) {
    addAllClasses.push(direction)
  }

  const handleToggle = (e) => {
    e.stopPropagation()
    setState((state) => !state)
  }

  const handleDocumentClick = (e) => {
    e.stopPropagation()
    if (state) {
      handleToggle(e)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleDocumentClick)
    return () => {
      window.removeEventListener('click', handleDocumentClick)
    }
  })

  return (
    <DropdownWrapper className={addAllClasses.join(' ')}>
      <span
        className={`dropdown-handler ${state ? 'active' : ''}`}
        onClick={handleToggle}
        style={{
          width: handlerWidth,
          height: handlerHeight
        }}
      >
        {handler}
      </span>
      {state && (
        <div className="dropdown-content">
          {content && (
            <div className="inner-wrap" onClick={handleToggle}>
              {content}
            </div>
          )}
        </div>
      )}
    </DropdownWrapper>
  )
}

export default Dropdown
