#!/usr/bin/env bash
# Копіює спільні файли з assets/ у public/ кожного сайту.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"

for site in join joinUp trip-vibe; do
  mkdir -p "$ROOT/$site/public/offers"
  cp -f "$ROOT/assets/tour-photos/"*.jpg "$ROOT/$site/public/offers/"
done

cp -f "$ROOT/assets/legal/bank-guarantees/57733-salamatina-svitlana.pdf" \
  "$ROOT/join/public/bank-guarantee.pdf"
cp -f "$ROOT/assets/legal/bank-guarantees/57741-salamatin-kyrylo.pdf" \
  "$ROOT/joinUp/public/bank-guarantee.pdf"
cp -f "$ROOT/assets/legal/bank-guarantees/57730-haidabuka-nina.pdf" \
  "$ROOT/trip-vibe/public/bank-guarantee.pdf"

mkdir -p "$ROOT/join/public/documents/operators"
mkdir -p "$ROOT/joinUp/public/documents/operators"
mkdir -p "$ROOT/trip-vibe/public/documents/operators"
cp -f "$ROOT/assets/deals/join/"* "$ROOT/join/public/documents/operators/"
cp -f "$ROOT/assets/deals/joinUp/"* "$ROOT/joinUp/public/documents/operators/"
cp -f "$ROOT/assets/deals/trip-vibe/"* "$ROOT/trip-vibe/public/documents/operators/"

echo "OK: tours, guarantees, and operator contracts synced to all sites."
