export const usePermission = (
  userPermissions: string[] | undefined,
  permissionRequired: string
) => {
  const hasPermission = userPermissions?.includes(permissionRequired);
  return hasPermission;
};
