import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const AnalyticsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="postId" source="postId" />
        <NumberInput step={1} label="shares" source="shares" />
        <NumberInput step={1} label="views" source="views" />
      </SimpleForm>
    </Edit>
  );
};
