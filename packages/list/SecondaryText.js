import ClassAdder, {internals} from '@svelte-material-ui/common/ClassAdder.svelte';
import Span from '@svelte-material-ui/common/Span.svelte';

function SecondaryText(...args) {
  internals.class = 'mdc-list-item__secondary-text';
  internals.component = Span;
  internals.contexts = {};
  return new ClassAdder(...args);
}

SecondaryText.prototype = ClassAdder;

export default SecondaryText;