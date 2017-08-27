import { getChildProps, getElementType } from '../../lib';

export default {
  name: 'SuiStepDescription',
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType {...getChildProps(this)} class="description">
        {this.$slots.default || this.content}
      </ElementType>
    );
  },
  meta: {
    parent: 'SuiStep',
  },
};
