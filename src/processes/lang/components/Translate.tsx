import { FormattedMessage } from 'react-intl';

const Translate = (id: string, value = {}) => <FormattedMessage id={id} values={{ ...value }} />;

export default Translate;
