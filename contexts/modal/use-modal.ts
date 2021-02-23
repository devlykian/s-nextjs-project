import { useContext, useEffect, useState, useCallback, useMemo } from 'react'
import { ModalContext, ModalType } from './modal.context'

/**
 * Callback types provided for descriptive type-hints
 */
type ShowModal = () => void
type HideModal = () => void

/**
 * Utility function to generate unique number per component instance
 */
const generateModalKey = (() => {
  let count = 0

  return () => `${++count}`
})()

/**
 * Check whether the argument is a stateless component.
 *
 * We take advantage of the stateless nature of functional components to be
 * inline the rendering of the modal component as part of another immutable
 * component.
 *
 * This is necessary for allowing the modal to update based on the inputs passed
 * as the second argument to useModal without unmounting the previous version of
 * the modal component.
 */
const isFunctionalComponent = (Component: Function) => {
  const prototype = Component.prototype

  return !prototype || !prototype.isReactComponent
}

/**
 * React hook for showing modal windows
 */
export const useModal = (
  component: ModalType,
  options: any = {}
): [ShowModal, HideModal] => {
  if (!isFunctionalComponent(component)) {
    throw new Error(
      'Only stateless components can be used as an argument to useModal. You have probably passed a class component where a function was expected.'
    )
  }

  const key = useMemo(generateModalKey, [])
  const modal = useMemo(() => component, options.inputs)
  const context = useContext(ModalContext)
  const showModal = useCallback(() => context.showModal(key, modal, options), [
    context.showModal
  ])
  const hideModal = useCallback(() => context.hideModal(key), [
    context.hideModal,
    key
  ])

  return [showModal, hideModal]
}
