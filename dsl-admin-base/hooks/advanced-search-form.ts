import { useEvent } from './event';
import { FormInstance } from 'antd/lib/form';
import { useRef, useState } from 'react';
import moment from 'moment';

export function useAdvancedForm() {
  const formInstance = useRef<FormInstance>(null);
  const submitFormValue = useEvent('SUBMIT_SEARCH_FORM');
  const [isOpenPicker, setOpenPicker] = useState(false);
  const [isOpenSelectedItems, setOpenSelectedItems] = useState(false);

  useEvent('REQUEST_SEARCH_FORM_DATA', async () => {
    if (formInstance.current) {
      let values = await formInstance.current.validateFields();
      values = { ...values };

      for (let [key, value] of Object.entries(values)) {
        if (value instanceof moment) {
          values[key] = (value as moment.Moment).format('DD/MM/YYYY');
        }
      }

      submitFormValue(values);
    }
  });

  return { formInstance, isOpenPicker, setOpenPicker, isOpenSelectedItems, setOpenSelectedItems };
}
