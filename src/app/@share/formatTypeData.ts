export function pointerFormat(className: string, objectId: string) {
  return {
    __type: "Pointer",
    className,
    objectId,
  };
}
