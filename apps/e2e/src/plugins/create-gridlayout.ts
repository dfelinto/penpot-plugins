export default function () {
  function createGridLayout(): void {
    const frame = penpot.createFrame();

    const grid = frame.addGridLayout();

    grid.addRow('flex', 1);
    grid.addRow('flex', 1);
    grid.addColumn('flex', 1);
    grid.addColumn('flex', 1);

    grid.alignItems = 'center';
    grid.justifyItems = 'start';
    grid.justifyContent = 'space-between';
    grid.alignContent = 'stretch';
    grid.rowGap = 10;
    grid.columnGap = 10;
    grid.verticalPadding = 5;
    grid.horizontalPadding = 5;
    grid.horizontalSizing = 'auto';
    grid.verticalSizing = 'auto';
  }

  createGridLayout();
}
