import type { Meta, StoryObj } from '@storybook/react'

import HelloPage from './HelloPage'

const meta: Meta<typeof HelloPage> = {
  component: HelloPage,
}

export default meta

type Story = StoryObj<typeof HelloPage>

export const Primary: Story = {}
