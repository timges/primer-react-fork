import React from 'react'
import {ProgressBar, Item as ProgressBarItem} from './ProgressBar'
import figma from '@figma/code-connect'

figma.connect(
  ProgressBar,
  'https://www.figma.com/design/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=34727-143491&t=9IoIKLzTri67l9CV-4',
  {
    props: {
      size: figma.enum('size', {
        small: 'small',
        medium: 'default',
        large: 'large',
      }),
      children: figma.children(['_ProgressBar.item', '_ProgressBar.item', '_ProgressBar.item']),
    },
    example: ({size, children}) => (
      <ProgressBar barSize={size} progress="...">
        {children}
      </ProgressBar>
    ),
  },
)

figma.connect(
  ProgressBarItem,
  'https://www.figma.com/design/GCvY3Qv8czRgZgvl1dG6lp/Primer-Web?node-id=34334-68158&t=ZDPd1N3qXGmK3Jif-4',
  {
    props: {
      color: figma.enum('color', {
        green: 'var(--data-green-color)',
        teal: 'var(--data-teal-color)',
        blue: 'var(--data-blue-color)',
        purple: 'var(--data-purple-color)',
        orange: 'var(--data-orange-color)',
        red: 'var(--data-red-color)',
        pink: 'var(--data-pink-color)',
        yellow: 'var(--data-yellow-color)',
        auburn: 'var(--data-auburn-color)',
        gray: 'var(--data-gray-color)',
      }),
    },
    example: ({color}) => <ProgressBarItem sx={{background: color}} />,
  },
)
