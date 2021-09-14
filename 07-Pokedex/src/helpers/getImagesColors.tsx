import ImageColors from 'react-native-image-colors';

export const getImagesColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {fallback: 'grey'});
  let backgroundColor;

  switch (colors.platform) {
    case 'android':
      // android result properties
      backgroundColor = colors.dominant;
      break;
    case 'web':
      // web result properties
      backgroundColor = colors.dominant;
      break;
    case 'ios':
      // iOS result properties
      backgroundColor = colors.primary;
      break;
    default:
      backgroundColor = 'grey';
    // throw new Error('Unexpected platform key');
  }

  return [backgroundColor];
};
