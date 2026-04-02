import { Skeleton, Theme } from '@/orchidui-core'

export default {
  component: Skeleton,
  tags: ['autodocs']
}

export const Default = {
  render: () => ({
    components: { Skeleton, Theme },
    template: `
      <Theme>
        <div class="flex flex-col gap-3 w-[300px]">
          <Skeleton class="h-4 w-full rounded" />
          <Skeleton class="h-4 w-3/4 rounded" />
          <Skeleton class="h-4 w-1/2 rounded" />
        </div>
      </Theme>
    `
  })
}

export const Shapes = {
  render: () => ({
    components: { Skeleton, Theme },
    template: `
      <Theme>
        <div class="flex gap-4 items-center">
          <Skeleton class="h-12 w-12 rounded-full" />
          <div class="flex flex-col gap-2">
            <Skeleton class="h-4 w-[200px] rounded" />
            <Skeleton class="h-4 w-[150px] rounded" />
          </div>
        </div>
      </Theme>
    `
  })
}
