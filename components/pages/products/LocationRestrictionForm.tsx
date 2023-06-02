import { Box, Text } from 'rebass';
import { LocationRestriction } from './LocationRestriction';
import { DataSrcType, PostcodeRestriction } from 'dsl-admin-base';
import { useMemo } from 'react';

interface Props {
  postcodes: PostcodeRestriction[];
}

export const LocationRestrictionForm: React.FC<Props> = ({ postcodes }) => {
  const adminAvailableRecords = useMemo(() => {
    return postcodes.map((o) => ({
      key: o.postcode.id.toString(),
      title: o.postcode.postcode,
      description: o.postcode.postcode,
    }));
  }, [postcodes]);

  const brandOwnerAvailableRecords: DataSrcType[] = useMemo(() => {
    return postcodes
      .filter((o) => !o.brandLocked)
      .map((o) => ({
        key: o.postcode.id.toString(),
        title: o.postcode.postcode,
        description: o.postcode.postcode,
      }));
  }, [postcodes]);

  const selectedBOItems: string = useMemo(() => {
    return postcodes
      .filter((o) => o.id && !o.brandLocked)
      .map((o) => o.postcode.postcode)
      .join(', ');
  }, [postcodes]);

  const selectedAdminItems: string = useMemo(() => {
    return postcodes
      .filter((o) => o.id && o.brandLocked)
      .map((o) => o.postcode.postcode)
      .join(', ');
  }, [postcodes]);

  return (
    <Box>
      <Box>
        <Text fontWeight={600} fontSize={16} mb="3">
          StarStock Location Restrictions
        </Text>
        <LocationRestriction
          dataSrc={adminAvailableRecords}
          defaultKeys={selectedAdminItems}
          name="adminPostcodeRestriction"
        />
      </Box>
      <Text fontWeight={600} fontSize={16} mt="3" mb="3">
        Brand Owner Location Restrictions
      </Text>
      <Text mb={3}>
        {/* To set brand level location restrictions against this product, select restricted postcodes,
        move them to "Location Restrictions Applied", and save. */}
      </Text>
      <LocationRestriction
        dataSrc={brandOwnerAvailableRecords}
        defaultKeys={selectedBOItems}
        name="boPostcodeRestriction"
      />
    </Box>
  );
};
