#!/usr/bin/env python3

from __future__ import annotations

import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw
except ImportError as exc:
    raise SystemExit(
        "Pillow is required to generate favicon assets. Install it before running this script."
    ) from exc


ROOT = Path(__file__).resolve().parent.parent
LOGO_PATH = ROOT / "public/images/logo-orange.png"
ICON_PATH = ROOT / "src/app/icon.png"
APPLE_ICON_PATH = ROOT / "src/app/apple-icon.png"
FAVICON_PATH = ROOT / "src/app/favicon.ico"
ICON_SIZE = 512
ICO_SIZES = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
APPLE_ICON_SIZE = 180
BACKGROUND = (0, 0, 0, 255)
BACKGROUND_INSET = 18
BACKGROUND_RADIUS = 92
K_CROP = (8, 8, 51, 49)
B_CROP = (317, 9, 355, 49)
K_HEIGHT = 228
B_HEIGHT = 228
LETTER_SPACING = 14
BASELINE = 372


def ensure_prerequisites() -> None:
    if not LOGO_PATH.exists():
        raise SystemExit(f"Missing source logo: {LOGO_PATH}")


def render_master_png() -> Image.Image:
    with Image.open(LOGO_PATH) as logo:
        source = logo.convert("RGBA")

    k = source.crop(K_CROP)
    b = source.crop(B_CROP)

    k_width = round(k.width * (K_HEIGHT / k.height))
    b_width = round(b.width * (B_HEIGHT / b.height))
    k = k.resize((k_width, K_HEIGHT), Image.Resampling.LANCZOS)
    b = b.resize((b_width, B_HEIGHT), Image.Resampling.LANCZOS)

    canvas = Image.new("RGBA", (ICON_SIZE, ICON_SIZE), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle(
        (
            BACKGROUND_INSET,
            BACKGROUND_INSET,
            ICON_SIZE - BACKGROUND_INSET,
            ICON_SIZE - BACKGROUND_INSET,
        ),
        radius=BACKGROUND_RADIUS,
        fill=BACKGROUND,
    )
    group_width = k.width + LETTER_SPACING + b.width
    start_x = (ICON_SIZE - group_width) // 2

    canvas.alpha_composite(k, (start_x, BASELINE - k.height))
    canvas.alpha_composite(
        b,
        (start_x + k.width + LETTER_SPACING, BASELINE - b.height),
    )
    return canvas


def build_assets(master_icon: Image.Image) -> None:
    master_icon.save(ICON_PATH)

    apple_icon = master_icon.resize((APPLE_ICON_SIZE, APPLE_ICON_SIZE), Image.Resampling.LANCZOS)
    apple_icon.save(APPLE_ICON_PATH)

    favicon_source = master_icon.resize((256, 256), Image.Resampling.LANCZOS)
    favicon_source.save(FAVICON_PATH, format="ICO", sizes=ICO_SIZES)


def main() -> int:
    ensure_prerequisites()
    build_assets(render_master_png())

    print(f"Wrote {ICON_PATH.relative_to(ROOT)}")
    print(f"Wrote {APPLE_ICON_PATH.relative_to(ROOT)}")
    print(f"Wrote {FAVICON_PATH.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
