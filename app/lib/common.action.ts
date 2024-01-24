import { validationAction } from '~/lib/utils';
import { json, type ActionFunctionArgs } from '@remix-run/node';
import { GetInTouchFormSchema } from '~/data/schema';
import type { GetInTouchFormInput } from '~/pages/index/components/get-in-touch-form';

export const contactUsAction = async ({ request }: ActionFunctionArgs) => {
  const { data, errors } = await validationAction<GetInTouchFormInput>({
    request,
    schema: GetInTouchFormSchema,
  });
  if (errors) {
    return json({ errors });
  }
  return json({ data });
};
