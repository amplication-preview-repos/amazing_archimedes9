import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const AnalyticsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="postId" source="postId" />
        <NumberInput step={1} label="shares" source="shares" />
        <NumberInput step={1} label="views" source="views" />
      </SimpleForm>
    </Create>
  );
};
