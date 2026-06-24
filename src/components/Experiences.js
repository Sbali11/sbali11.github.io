// Experiences.js
import React from 'react';
import { Typography, Box, Link, Stack, Chip } from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';

const LINK_CONFIG = [
  { key: 'thesis',  label: 'Thesis',   color: '#111827', bg: '#f3f4f6',  hover: '#e5e7eb' },
  { key: 'paper',   label: 'Paper',    color: '#111827', bg: '#f3f4f6',  hover: '#e5e7eb' },
  { key: 'report',  label: 'Report',   color: '#111827', bg: '#f3f4f6',  hover: '#e5e7eb' },
  { key: 'poster',  label: 'Poster',   color: '#0891b2', bg: '#ecfeff',  hover: '#cffafe' },
  { key: 'video',   label: 'Video',    color: '#dc2626', bg: '#fef2f2',  hover: '#fee2e2' },
  { key: 'code',    label: 'Code',     color: '#7c3aed', bg: '#f5f3ff',  hover: '#ede9fe' },
  { key: 'website', label: 'Website',  color: '#059669', bg: '#ecfdf5',  hover: '#d1fae5' },
  { key: 'article', label: 'Article',  color: '#ca8a04', bg: '#fefce8',  hover: '#fef9c3' },
];

export default function Experiences({ title, list, selectedTags = new Set(), highlightedIndices = new Set() }) {
  const itemMatchesTags = (item, index) => {
    if (highlightedIndices.size > 0) return highlightedIndices.has(index);
    if (selectedTags.size === 0) return false;
    if (!item.tags) return false;
    return Array.from(selectedTags).some(tag => Object.keys(item.tags).includes(tag));
  };

  return (
    <Box>
      {/* Section title */}
      {title && (
        <Box sx={{ mb: 4, pb: 2, borderBottom: '2px solid #e5e7eb' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: '#111827',
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              fontFamily: '"Georgia", "Times New Roman", serif',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </Typography>
        </Box>
      )}

      <Box sx={{ width: '100%' }}>
        {list.map((data, index) => {
          const isHighlighted = itemMatchesTags(data, index);
          const isLast = index === list.length - 1;

          return (
            <Box
              key={index}
              sx={{
                py: 3.5,
                borderBottom: isLast ? 'none' : '1px solid #f0f0f0',
                borderLeft: isHighlighted ? '3px solid #374151' : 'none',
                pl: isHighlighted ? 2.5 : 0,
                backgroundColor: isHighlighted ? '#f0f7ff' : 'transparent',
                borderRadius: isHighlighted ? '8px' : 0,
                transition: 'all 0.25s ease',
              }}
            >
              {/* Award badge */}
              {data.awards && (
                <Box
                  sx={{
                    mb: 1.75,
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: '#92400e',
                    backgroundColor: '#fef3c7',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '6px',
                    border: '1px solid #fde68a',
                  }}
                >
                  <EmojiEvents sx={{ mr: 0.75, fontSize: 16 }} />
                  <Typography
                    sx={{ fontWeight: 600, fontSize: '0.8rem', fontFamily: "'Inter', sans-serif" }}
                  >
                    {data.awards}
                  </Typography>
                </Box>
              )}

              {/* Header: name + year */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'flex-start' },
                  justifyContent: 'space-between',
                  gap: 1,
                  mb: 0.5,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#111827',
                    fontSize: { xs: '1.1rem', md: '1.18rem' },
                    lineHeight: 1.35,
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    flex: 1,
                  }}
                >
                  {data.name}
                </Typography>

                {data.year && (
                  <Chip
                    label={data.year}
                    size="small"
                    sx={{
                      backgroundColor: '#f3f4f6',
                      color: '#6b7280',
                      fontWeight: 500,
                      fontSize: '0.72rem',
                      height: 22,
                      fontFamily: "'Inter', sans-serif",
                      flexShrink: 0,
                      mt: { xs: 0, sm: 0.25 },
                    }}
                  />
                )}
              </Box>

              {/* Position */}
              {data.position && (
                <Typography
                  sx={{
                    color: '#374151',
                    mb: 0.25,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {data.position}
                </Typography>
              )}

              {/* Org */}
              {data.org && (
                <Typography
                  sx={{
                    color: '#4b5563',
                    mb: 1.75,
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    fontStyle: 'italic',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {data.org}
                </Typography>
              )}

              {/* Tags */}
              {data.tags && Object.keys(data.tags).length > 0 && (
                <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 2 }}>
                  {Object.keys(data.tags).map((tag) => {
                    const isTagSelected = selectedTags.has(tag);
                    return (
                      <Box
                        key={tag}
                        component="span"
                        sx={{
                          display: 'inline-block',
                          backgroundColor: isTagSelected ? '#e5e7eb' : '#f3f4f6',
                          color: isTagSelected ? '#111827' : '#4b5563',
                          fontWeight: isTagSelected ? 600 : 500,
                          fontSize: '0.72rem',
                          px: 1.125,
                          py: 0.375,
                          borderRadius: '5px',
                          border: isTagSelected ? '1px solid #9ca3af' : '1px solid #e5e7eb',
                          fontFamily: "'Inter', sans-serif",
                          transition: 'all 0.15s ease',
                        }}
                      >
                        {tag}
                      </Box>
                    );
                  })}
                </Stack>
              )}

              {/* Links */}
              {LINK_CONFIG.some(({ key }) => data[key]) && (
                <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 2 }}>
                  {LINK_CONFIG.map(({ key, label, color, bg, hover }) =>
                    data[key] ? (
                      <Link
                        key={key}
                        href={data[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                        sx={{
                          color,
                          fontSize: '0.76rem',
                          fontWeight: 600,
                          px: 1.25,
                          py: 0.375,
                          borderRadius: '6px',
                          backgroundColor: bg,
                          fontFamily: "'Inter', sans-serif",
                          transition: 'background-color 0.15s ease',
                          '&:hover': { backgroundColor: hover },
                        }}
                      >
                        {label}
                      </Link>
                    ) : null
                  )}
                </Stack>
              )}

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: '#374151',
                  lineHeight: 1.85,
                  fontSize: '0.9rem',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {data.desc}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
