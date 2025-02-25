export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      _ponder_meta: {
        Row: {
          key: string
          value: Json | null
        }
        Insert: {
          key: string
          value?: Json | null
        }
        Update: {
          key?: string
          value?: Json | null
        }
        Relationships: []
      }
      _ponder_status: {
        Row: {
          block_number: number | null
          block_timestamp: number | null
          network_name: string
          ready: boolean
        }
        Insert: {
          block_number?: number | null
          block_timestamp?: number | null
          network_name: string
          ready: boolean
        }
        Update: {
          block_number?: number | null
          block_timestamp?: number | null
          network_name?: string
          ready?: boolean
        }
        Relationships: []
      }
      _reorg__Asset: {
        Row: {
          address: string | null
          chain_id: string | null
          checkpoint: string
          decimals: number | null
          id: string
          is_nft: boolean | null
          is_stable: boolean | null
          name: string | null
          operation: number
          operation_id: number
          symbol: string | null
        }
        Insert: {
          address?: string | null
          chain_id?: string | null
          checkpoint: string
          decimals?: number | null
          id: string
          is_nft?: boolean | null
          is_stable?: boolean | null
          name?: string | null
          operation: number
          operation_id?: number
          symbol?: string | null
        }
        Update: {
          address?: string | null
          chain_id?: string | null
          checkpoint?: string
          decimals?: number | null
          id?: string
          is_nft?: boolean | null
          is_stable?: boolean | null
          name?: string | null
          operation?: number
          operation_id?: number
          symbol?: string | null
        }
        Relationships: []
      }
      _reorg__SwapEvent: {
        Row: {
          amount0: string | null
          amount1: string | null
          block_number: number | null
          checkpoint: string
          id: string
          operation: number
          operation_id: number
          pool_address: string | null
          sqrt_price_x_96: string | null
          timestamp: number | null
          token0_address: string | null
          token1_address: string | null
        }
        Insert: {
          amount0?: string | null
          amount1?: string | null
          block_number?: number | null
          checkpoint: string
          id: string
          operation: number
          operation_id?: number
          pool_address?: string | null
          sqrt_price_x_96?: string | null
          timestamp?: number | null
          token0_address?: string | null
          token1_address?: string | null
        }
        Update: {
          amount0?: string | null
          amount1?: string | null
          block_number?: number | null
          checkpoint?: string
          id?: string
          operation?: number
          operation_id?: number
          pool_address?: string | null
          sqrt_price_x_96?: string | null
          timestamp?: number | null
          token0_address?: string | null
          token1_address?: string | null
        }
        Relationships: []
      }
      _reorg__User: {
        Row: {
          address: string
          checkpoint: string
          created_at: number | null
          ens_name: string | null
          operation: number
          operation_id: number
          updated_at: number | null
        }
        Insert: {
          address: string
          checkpoint: string
          created_at?: number | null
          ens_name?: string | null
          operation: number
          operation_id?: number
          updated_at?: number | null
        }
        Update: {
          address?: string
          checkpoint?: string
          created_at?: number | null
          ens_name?: string | null
          operation?: number
          operation_id?: number
          updated_at?: number | null
        }
        Relationships: []
      }
      Asset: {
        Row: {
          address: string | null
          chain_id: string | null
          decimals: number | null
          id: string
          is_nft: boolean | null
          is_stable: boolean | null
          name: string | null
          symbol: string | null
        }
        Insert: {
          address?: string | null
          chain_id?: string | null
          decimals?: number | null
          id: string
          is_nft?: boolean | null
          is_stable?: boolean | null
          name?: string | null
          symbol?: string | null
        }
        Update: {
          address?: string | null
          chain_id?: string | null
          decimals?: number | null
          id?: string
          is_nft?: boolean | null
          is_stable?: boolean | null
          name?: string | null
          symbol?: string | null
        }
        Relationships: []
      }
      SwapEvent: {
        Row: {
          amount0: string | null
          amount1: string | null
          block_number: number | null
          id: string
          pool_address: string | null
          sqrt_price_x_96: string | null
          timestamp: number | null
          token0_address: string | null
          token1_address: string | null
        }
        Insert: {
          amount0?: string | null
          amount1?: string | null
          block_number?: number | null
          id: string
          pool_address?: string | null
          sqrt_price_x_96?: string | null
          timestamp?: number | null
          token0_address?: string | null
          token1_address?: string | null
        }
        Update: {
          amount0?: string | null
          amount1?: string | null
          block_number?: number | null
          id?: string
          pool_address?: string | null
          sqrt_price_x_96?: string | null
          timestamp?: number | null
          token0_address?: string | null
          token1_address?: string | null
        }
        Relationships: []
      }
      User: {
        Row: {
          address: string
          created_at: number | null
          ens_name: string | null
          updated_at: number | null
        }
        Insert: {
          address: string
          created_at?: number | null
          ens_name?: string | null
          updated_at?: number | null
        }
        Update: {
          address?: string
          created_at?: number | null
          ens_name?: string | null
          updated_at?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never
