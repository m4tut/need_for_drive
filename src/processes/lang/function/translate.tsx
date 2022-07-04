import { FormattedMessage } from 'react-intl';

const translate = (id: string, value = {}) => <FormattedMessage id={id} values={{ ...value }} />;

export default translate;
