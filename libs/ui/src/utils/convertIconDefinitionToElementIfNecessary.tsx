import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isValidElement } from "react";

export const convertIconDefinitionToElementIfNecessary = (
	iconOrElement: JSX.Element | IconDefinition | undefined
) => {
	if (!iconOrElement || isValidElement(iconOrElement)) return undefined;
	return <FontAwesomeIcon icon={iconOrElement as IconDefinition} />;
};
