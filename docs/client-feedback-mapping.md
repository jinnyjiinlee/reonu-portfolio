# REONU v1 PDF 피드백 → 구현 매핑

Source: `(REONU)web-site_v1피드백.pdf` (Google Drive fileId `1H88fGyPc_WfiVGF7Hha2w4XtmusO73na`)
Reference: https://mobius.framer.website/

| # | 클라이언트 요청 | 영향 파일 | 수정 유형 | 의존 자산 |
|---|---|---|---|---|
| 2 | "24" 숫자 밑 회색 작은 글씨 제거 (더 깔끔하게) | `src/components/home/ProjectCounter.tsx` | 카피/스타일 | — |
| 3 | 메인 페이지에 프로젝트 나열(쫘라락) 금지 | `src/app/[locale]/page.tsx`, `src/components/home/FeaturedWork.tsx` | 레이아웃 | — |
| 4 | Our Service 워딩 한/영 정리된 것 사용. 호버 효과·색상 변화 없이 참고사이트처럼 | `src/components/home/Services.tsx`, `src/dictionaries/{ko,en}.json`, `src/data/pricing.ts` | 카피+스타일 | 스프레드시트 `pricing_layout_overview` |
| 5 | Completed project 숫자 노출 OK. 바로 Our Work로 이어지는 것 OK | `src/components/home/ProjectCounter.tsx`, `src/app/[locale]/page.tsx` | 레이아웃 | — |
| 6 | "let's" 위 회색 작은 글씨 제거 | `src/components/home/ContactCTA.tsx` | 카피/스타일 | — |
| 7 | (동일한 회색 글씨 제거, 다른 섹션) | 해당 섹션 식별 필요 (About CTA 등) | 카피/스타일 | — |
| 9 | About 이미지 첨부물 참고해 반영 | `src/components/about/AboutContent.tsx`, `public/images/profile/` | 콘텐츠+자산 | `2. Profile` 폴더 4장 |
| 10 | Work 클릭 시 썸네일 그리드 (참고사이트) | `src/app/[locale]/work/page.tsx` (신규), `src/components/work/WorkGrid.tsx` (신규) | 신규 섹션 | 각 프로젝트 `cover-01.jpg` |
| 11 | Work > 썸네일 > 서브페이지 이미지 규격 — MVP 후 결정 | `src/components/work/ProjectDetail.tsx` | 추후 결정 | 각 프로젝트 상세 이미지 |
| 12 | Studio(About) 페이지에 참고 이미지 배치 | `src/components/about/AboutContent.tsx` | 레이아웃 | `2. Profile` |
| 13 | Feed 클릭 시 최근 작업물 노출 (참고사이트 스크롤 참고) | 메뉴 구조에 Feed 섹션 검토 필요 | 신규 (검토) | — (displayOrder 역순) |
| 14 | Contact에 budget + 현상황(timeline/service_type) 체크 | `src/components/contact/ContactContent.tsx`, `src/data/contactForm.ts` (신규) | 필드 확장 | 스프레드시트 `contact_layout_overview` |
| 15 | Contact 아래 스크롤 시 배경 이미지 (주소 빼고, 배경 이미지 별도 전달 예정) | `src/components/contact/ContactContent.tsx` | 레이아웃 | `5. ETC` 폴더 (블로커) |

## 전반 규칙 (PDF에서 도출)

- 숫자/카운터 하단 회색 부가 설명 제거 (#2, #6, #7 공통)
- 호버 효과·색상 변화는 Möbius 수준으로 최소화 (#4)
- 메인은 정리된 단일 인상, 상세 탐색은 Work 페이지로 분리 (#3 + #10)

## Phase 0 블로커 (미해결)

- 폴더 번호 vs 스프레드시트 번호 불일치 — **스프레드시트(26개)가 정(正)으로 확정 가정하고 선진행**
- `3. OG_Image`, `5. ETC` 빈 폴더 — placeholder 경로만 연결
- 따릉이, 소람한방병원 이미지 자산 — 스프레드시트에는 있으나 폴더 미확인
- Resume 파일 미전달
