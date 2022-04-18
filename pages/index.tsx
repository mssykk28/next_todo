import { NextPage } from "next";

import { Textarea, Grid } from "@nextui-org/react";


const Page: NextPage = () => {
  return (
    <Grid.Container gap={2.5} css={{ mt: "4px" }}>
      <Grid>
        <Textarea labelPlaceholder="Default" status="default" />
      </Grid>
      <Grid>
        <Textarea labelPlaceholder="Primary" status="primary" />
      </Grid>
      <Grid>
        <Textarea labelPlaceholder="Secondary" status="secondary" />
      </Grid>
      <Grid>
        <Textarea labelPlaceholder="Success" status="success" />
      </Grid>
      <Grid>
        <Textarea labelPlaceholder="Warning" status="warning" />
      </Grid>
      <Grid>
        <Textarea labelPlaceholder="Error" status="error" />
      </Grid>
    </Grid.Container>
  );
}

export default Page;