export enum DataGridResizeType {
	Discrete = "discrete",
	exact = "exact",
}

export enum GenerateHeaderOption {
	None = "none",
	Default = "default",
	Sticky = "sticky",
}

export enum DataGridRowSize {
	Small = 32,
	Medium = 44,
	Smaller = 24,
	Large = 58,
}

export enum DataGridRowType {
	Default = "default",
	Header = "header",
	StickyHeader = "stickyHeader",
}

export enum DataGridCellType {
	Default = "default",
	ColumnHeader = "columnHeader",
	RowHeader = "rowHeader",
}

export enum Align {
	Start = "flex-start",
	Center = "center",
	End = "flex-end",
	Stretch = "stretch",
	Baseline = "baseline",
}

export enum HorizontalAlignment {
	Left = "left",
	Start = "start",
	Center = "center",
	Right = "right",
	End = "end",
	Stretch = "stretch",
}

export enum VerticalAlignment {
	Top = "top",
	Center = "center",
	Bottom = "bottom",
}

export enum Orientation {
	Horizontal = "horizontal",
	Vertical = "vertical",
}

export enum ProgressStroke {
	Small = "small",
	Normal = "normal",
	Large = "large",
}

export enum SortDirection {
	Auto = "auto",
	Ascending = "asc",
	Descending = "desc",
}

export enum ButtonType {
	Button = "button",
	Submit = "submit",
	Reset = "reset",
}

export enum Appearance {
	Neutral = "neutral",
	Accent = "accent",
	Hypertext = "hypertext",
	Lightweight = "lightweight",
	Outline = "outline",
	Stealth = "stealth",
	Filled = "filled",
}

export enum Typography
{
    Body = 'body',
    Subject = 'subject',
	Header = 'header',
	PaneHeader = 'pane-header',
    EmailHeader = 'email-header',
    PageTitle = 'page-title',
    HeroTitle = 'hero-title',
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export enum Colors {
	Neutral = 'var(--neutral-foreground-rest)',
	Accent = 'var(--accent-fill-rest)',
	Warning = 'var(--warning)',
	Info = 'var(--info)',
	Error = 'var(--error)',
	Success = 'var(--success)',
	Fill = 'var(--neutral-fill-rest)',
	FillInverse = "var(--neutral-fill-inverse-rest)",
	Lightweight = 'var(--neutral-layer-1)',
	Disabled = 'var(--neutral-stroke-rest)',
	Custom = 'var(--neutral-foreground-rest)',
}

export enum FontWeight {
	Normal = 'normal',
	Bold = 'bold',
	Bolder = 'bolder',
}

export enum DividerRole {
	Separator = 'separator',
	Presentation = 'presentation',
}

export enum IconSize {
	Size10 = 10,
	Size12 = 12,
	Size16 = 16,
	Size20 = 20,
	Size24 = 24,
	Size28 = 28,
	Size32 = 32,
	Size48 = 48,
	Custom = 0
}

export enum IconVariant {
	Filled = 'filled',
	Regular = 'regular',
	Light = 'light',
	Color = 'color',
}

export enum InputMode {
	None = 'none',
	Text = 'text',
	Decimal = 'decimal',
	Numeric = 'numeric',
	Telephone = 'tel',
	Search = 'search',
	Email = 'email',
	URL = 'url',
}

export enum JustifyContent {
	FlexStart = 'flex-start',
	Center = 'center',
	FlexEnd = 'flex-end',
	SpaceBetween = 'space-between',
	SpaceAround = 'space-around',
	SpaceEvenly = 'space-evenly',
}

export enum TextFieldType {
	Text = 'text',
	Email = 'email',
	Password = 'password',
	Tel = 'tel',
	Url = 'url',
	Color = 'color',
	Search = 'search',
	Number = 'number',
}

export enum InputAppearance {
	Filled = 'filled',
	Outline = 'outline',
}

export enum ComboboxAutocomplete {
	Inline = 'inline',
	List = 'list',
	Both = 'both',
}

export enum SelectPosition {
	Above = 'above',
	Below = 'below',
}