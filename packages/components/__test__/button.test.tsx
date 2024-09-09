import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils'
import Button from '../button/src/button.vue';

describe('Button.vue', ()=>{
    it('create', ()=> {

    })
    it('size', ()=>{
        const wrapper = mount(()=> <Button size="large" />)
        expect(wrapper.classes()).toContain('c-button--large')
    })
}

)