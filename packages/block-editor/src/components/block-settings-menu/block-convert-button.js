/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { MenuItem } from '@wordpress/components';

export default function BlockConvertButton( { shouldRender, onClick, small } ) {
	if ( ! shouldRender ) {
		return null;
	}

	const label = __( 'Convert to Blocks' );
	return (
		<MenuItem
			className="block-editor-block-settings-menu__control"
			onClick={ onClick }
		>
			{ ! small && label }
		</MenuItem>
	);
}
