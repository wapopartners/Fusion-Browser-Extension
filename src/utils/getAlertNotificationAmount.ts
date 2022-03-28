// todo: use this in a centralized place
// copy-pasted from alerts
const SUPPORTED_FUSION_RELEASE = '2.6.4';
const LATEST_FUSION_RELEASE = '2.8.0';

function getAlertNotificationAmount(fusionVersion: string) {
  let totalAlerts = 0;
  if (fusionVersion < LATEST_FUSION_RELEASE && fusionVersion > SUPPORTED_FUSION_RELEASE) {
    totalAlerts += 1;
  }

  if (fusionVersion < SUPPORTED_FUSION_RELEASE) {
    totalAlerts += 1;
  }

  return totalAlerts;
}

export default getAlertNotificationAmount;