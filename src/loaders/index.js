/* eslint-disable new-cap */
import React from 'react'
import Loadable from 'react-loadable'

const Loading = () => <h1>Loading</h1>

export const LoadableSign = Loadable({
  loader: () => import('../containers/sign-petition'),
  loading: Loading
})

export const LoadableHome = Loadable({
  loader: () => import('../containers/home'),
  loading: Loading
})

export const LoadablePacHome = Loadable({
  loader: () => import('../containers/pac-home'),
  loading: Loading
})

export const LoadableSearch = Loadable({
  loader: () => import('../containers/search'),
  loading: Loading
})

export const LoadableCreate = Loadable({
  loader: () => import('../containers/create-petition'),
  loading: Loading
})

export const LoadableRegister = Loadable({
  loader: () => import('../containers/register'),
  loading: Loading
})

export const LoadableLogin = Loadable({
  loader: () => import('../containers/login'),
  loading: Loading
})

export const LoadableForgotPassword = Loadable({
  loader: () => import('../containers/forgot-password'),
  loading: Loading
})

export const LoadableThanks = Loadable({
  loader: () => import('../containers/thanks'),
  loading: Loading
})

export const LoadablePetitionReport = Loadable({
  loader: () => import('../containers/petition-report'),
  loading: Loading
})

export const LoadableDashboard = Loadable({
  loader: () => import('../containers/petition-creator-dashboard'),
  loading: Loading
})
