// ResearchSection.js
import React from 'react';
import { Typography, Box, Link, Chip, Stack } from '@mui/material';
import { EmojiEvents } from '@mui/icons-material';

const LINK_STYLES = {
  Paper:  { color: '#111827', bg: '#f3f4f6',  hover: '#e5e7eb' },
  Thesis: { color: '#111827', bg: '#f3f4f6',  hover: '#e5e7eb' },
  Demo:   { color: '#059669', bg: '#ecfdf5',  hover: '#d1fae5' },
  Code:   { color: '#7c3aed', bg: '#f5f3ff',  hover: '#ede9fe' },
  Video:  { color: '#dc2626', bg: '#fef2f2',  hover: '#fee2e2' },
  Poster: { color: '#0891b2', bg: '#ecfeff',  hover: '#cffafe' },
  Press:  { color: '#ca8a04', bg: '#fefce8',  hover: '#fef9c3' },
};

function LinkPill({ href, label }) {
  const style = LINK_STYLES[label] || LINK_STYLES.Paper;
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      sx={{
        color: style.color,
        fontSize: '0.72rem',
        fontWeight: 600,
        px: 1.125,
        py: 0.375,
        borderRadius: '6px',
        backgroundColor: style.bg,
        fontFamily: "'Inter', sans-serif",
        letterSpacing: '0.01em',
        transition: 'background-color 0.15s ease',
        '&:hover': { backgroundColor: style.hover },
      }}
    >
      {label}
    </Link>
  );
}

export default function ResearchSection({ title, items, itemMatchesTag }) {
  return (
    <Box sx={{ mb: 5 }}>
      {/* Section header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 2.5,
          pb: 1.5,
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: '#374151',
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontFamily: "'Inter', sans-serif",
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>
      </Box>

      <Stack spacing={2}>
        {items.map((data, index) => {
          const isHighlighted = itemMatchesTag ? itemMatchesTag(data) : false;
          return (
            <Box
              key={index}
              sx={{
                p: 2.25,
                borderRadius: '10px',
                border: isHighlighted ? '1px solid #d1d5db' : '1px solid #f0f0f0',
                backgroundColor: isHighlighted ? '#f3f4f6' : '#fafafa',
                borderLeft: isHighlighted ? '3px solid #374151' : '1px solid #f0f0f0',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: isHighlighted ? '#e5e7eb' : '#f5f5f5',
                  borderColor: isHighlighted ? '#93c5fd' : '#e5e7eb',
                },
              }}
            >
              {/* Venue + Award row */}
              <Stack direction="row" spacing={0.75} alignItems="center" flexWrap="wrap" sx={{ mb: 1, rowGap: 0.75 }}>
                {data.venue && (
                  <Chip
                    label={data.venue}
                    size="small"
                    sx={{
                      backgroundColor: '#e8effe',
                      color: '#3730a3',
                      fontWeight: 700,
                      fontSize: '0.66rem',
                      height: 21,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  />
                )}
                {data.awards && (
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: '#92400e',
                      backgroundColor: '#fef3c7',
                      px: 1,
                      py: 0.2,
                      borderRadius: '8px',
                      fontSize: '0.66rem',
                    }}
                  >
                    <EmojiEvents sx={{ mr: 0.5, fontSize: 13 }} />
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: 600, fontSize: '0.66rem', fontFamily: "'Inter', sans-serif" }}
                    >
                      {data.awards}
                    </Typography>
                  </Box>
                )}
              </Stack>

              {/* Title */}
              <Typography
                sx={{
                  color: '#111827',
                  fontSize: '0.94rem',
                  lineHeight: 1.45,
                  fontWeight: 600,
                  mb: 0.375,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {data.name}
              </Typography>

              {/* Authors */}
              {data.org && (
                <Typography
                  sx={{
                    color: '#6b7280',
                    fontSize: '0.78rem',
                    fontStyle: 'italic',
                    mb: 1.25,
                    lineHeight: 1.5,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {data.org}
                </Typography>
              )}

              {/* Links */}
              <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
                {data.paper   && <LinkPill href={data.paper}   label="Paper"  />}
                {data.thesis  && <LinkPill href={data.thesis}  label="Thesis" />}
                {data.website && <LinkPill href={data.website} label="Demo"   />}
                {data.code    && <LinkPill href={data.code}    label="Code"   />}
                {data.video   && <LinkPill href={data.video}   label="Video"  />}
                {data.poster  && <LinkPill href={data.poster}  label="Poster" />}
                {data.article && <LinkPill href={data.article} label="Press"  />}
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
